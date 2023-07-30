import custom1 from "../../../public/images/custom1.png";
import custom2 from "../../../public/images/custom2.png";
import custom3 from "../../../public/images/custom3.png";
import custom4 from "../../../public/images/custom4.png";
import custom5 from "../../../public/images/custom5.png";

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
  header: "PLATFORM & WEBSITE DEVELOPMENT",
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
