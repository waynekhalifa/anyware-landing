import { useEffect } from "react";

interface Props {
  containerID: string;
  scrollHeight: number;
}

const useStickyHeader = (params: Props) => {
  const { containerID, scrollHeight } = params;

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e: any) => {
    const header = document.getElementById(containerID);
    const scrollTop = window.scrollY;

    if (header) {
      if (scrollTop >= scrollHeight) {
        // document.querySelectorAll("body")[0].style.marginTop =
        //   header.offsetHeight + "px";
        header.classList.add("is-sticky");
      } else {
        // document.querySelectorAll("body")[0].style.marginTop = "0px";
        header.classList.remove("is-sticky");
      }
    }
  };
};

export default useStickyHeader;
