import POS from "../../../public/images/posPayment.png"
import integration1 from "../../../public/images/integration1.png";
import integration2 from "../../../public/images/integration2.png";

import bannerform3 from "../../../public/images/bannerform3.webp";
const makeRes = {
  typo: "Get your Oracle Micros Simphony POS Sales Synchronized to your ERP daily!",
  Description:"Boost the operational flow of your restaurant by seamlessly integrating Simphony & Oracle Inventory data with your preferred ERP ", 
    img : [integration2,POS,integration1],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
        "Reducing data error by automating data entry.",
        "Increasing the efficiency and speed of the business operation.",
        "Better data monitoring as data is securely transferred to your ERP.",
        "The data is pushed to your ERP journal unposted or provisioned for accounting team review.",
        "Automate synchronization processes on a daily, weekly, and monthly basis without any manual intervention.",
        "Classifying your Journal entries according to your pre-configured over groups."
        
    ],
    animationType: "slide",
  },
  direction:"row",
  header:'ORACLE  SIMPHONY / INVENTORY INTEGRATOR'
};
const floorMap = {
  typo: "Submit your system integration requirements and we have got your back!",
  Description:
    "You can integrate your ERP with any external systems if it simply supports API integration.",
    img : [bannerform3],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
        "Improved Data Accuracy & Streamlined Processes",
        "Enhanced Visibility and Reporting",
        "Scalability and Flexibility",
        "Increased Productivity"
    ],
    animationType: "slide",
  },
  direction:"row",
  header:'INTEGRATION SERVICES'
};

export const Items = [makeRes,floorMap];
