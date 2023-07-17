import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  const router = useRouter();
  const [width, setWidth] = useState<number>(-1);
  const [windowLoaded, setWindowLoaded] = useState<boolean>(false);

  useEffect(() => {
    console.log("ho")
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    const handleRouteChangeComplete = () => {
      setWindowLoaded(true);
    };

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setWindowLoaded(true);

      window.addEventListener("resize", handleWindowSizeChange);
      router.events.on("routeChangeComplete", handleRouteChangeComplete);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowSizeChange);
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
      }
    };
  }, [router.events]);

  const isMobile = width <= 768;

  return { windowLoaded, isMobile, width };
};

export default useIsMobile;
