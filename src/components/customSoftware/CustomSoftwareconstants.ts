import custom1 from "@images/custom1.webp";
import custom2 from "@images/custom2.webp";
import custom3 from "@images/custom3.webp";
import custom4 from "@images/custom4.webp";
import custom5 from "@images/custom5.webp";

const makeRes = {
  typo: "Customize your website or platform as per your business requirements.",
  Description: "We design, develop, and implement custom software solutions.",
  img: [custom1, custom2, custom3],
  imgOrientation: "landscape",

  animatedTexts: {
    items: [
      "Customizable graphic designs",
      "Matching business requirements and brand identity.",
      "Previous expertise in platform development including websites  and web applications.",
      "Ownership and control.",
      "Improved user experience.",
      "Integration capabilities",
    ],
    animationType: "slide",
  },
  direction: "row",
  header: "PLATFORM & WEBSITE DEVELOPMENT ",
};
const floorMap = {
  typo: "Unlock the power of mobile technology for your business!",
  Description:
    "Let’s create a cutting-edge mobile application tailored to your unique needs. Get started today and let's bring your vision to life!",
  img: [custom4, custom5],
  imgOrientation: "portrait",

  animatedTexts: {
    items: [
      "Tailor-made and unique application design",
      "Boost customer engagement",
      "Streamline operations",
      "Improved user experience",
      "Integration capabilities",
    ],
    animationType: "slide",
  },
  direction: "row",
  header: "MOBILE APPLICATION DEVELOPMENT",
};

export const Items = [makeRes, floorMap];
