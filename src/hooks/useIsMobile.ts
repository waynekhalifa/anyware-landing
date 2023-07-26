import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  const router = useRouter();
  const [width, setWidth] = useState<number>(-1);
  const [height, setHeight] = useState<number>(-1);
  const [windowLoaded, setWindowLoaded] = useState<boolean>(false);

  useEffect(() => {
    
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    };

    const handleRouteChangeComplete = () => {
      setWindowLoaded(true);
    };

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
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

  return { windowLoaded, isMobile, width, height };
};

export default useIsMobile;
