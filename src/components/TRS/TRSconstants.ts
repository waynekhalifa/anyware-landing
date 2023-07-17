import trs1 from "../../../public/images/trs1.png";
import trs2 from "../../../public/images/trs2.png";
import trs3 from "../../../public/images/trs3.png";
import bakymobile1 from "../../../public/images/bakymobile1.png"
import bakymobile2 from "../../../public/images/bakymobile2.png"
import bakymobile3 from "../../../public/images/bakymobile3.png"
import bakymobile4 from "../../../public/images/bakymobile4.png"
import bakymobile5 from "../../../public/images/bakymobile5.png"
import bakymobile6 from "../../../public/images/bakymobile6.png"
import posPayment from "../../../public/images/posPayment.png";
import payMob from "../../../public/images/paymob.png";
import visa from "../../../public/images/visa.png";
import meeza from "../../../public/images/meeza.png";
import masterCard from "../../../public/images/masterCard.png";
import payment1 from "../../../public/images/payment1.png";
import payment2 from "../../../public/images/payment2.png";
import payment3 from "../../../public/images/payment3.png";
import cashless1 from "../../../public/images/cashless1.png";
import cashless2 from "../../../public/images/cashless2.png";
import aio1 from "../../../public/images/aio1.png"
import aio3 from "../../../public/images/aio3.png"
import aio4 from "../../../public/images/aio4.png"
import aio5 from "../../../public/images/aio5.png"
import aio6 from "../../../public/images/aio6.png"
const makeRes = {
  typo: "Make outings and special events reservations more easy!",
  Description:
    "Handle full booking cycle  in your venue with multiple add-on features",
    img : [trs1],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
      "Branded Mobile Application",
      "Reporting dashboard includes all  bookings statistics",
      "Customizable floor plans",
      "Multiple branches",
      "In-App CRM",
    ],
    animationType: "slide",
  },
  direction:"row"
};
const floorMap = {
  typo: "Mimic your venue layout with an advanced floor-plan editor!",
  Description:
    "You will be able to add, delete and update tables with the easiest drag and drop option to mimic the exact venue layout in reality.",
    img : [trs2],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [],
    animationType: "slide",
  },
  direction:"row"
};
const deposit = {
  typo: "Collect Reservation Deposits From your  App or website",
  Description:"Guests will pay upfront deposits in-app to confirm their spot reservation.",
    // img : [bakymobile1,bakymobile2,bakymobile3],
    img : [bakymobile4,bakymobile5],
    imgOrientation: "portrait",

  animatedTexts: {
    items: [],
    animationType: "slide",
  },
  direction:"row-reverse"
};
const checkin = {
  typo: "Guests Check-in using In-app QR Codes",
  Description:"Guests’ ability to track pending,upcoming and past reservations in addition to ability to view booking check-in ticket with QR code to be used within the door selection and entrance process.",
    // img : [bakymobile1,bakymobile2,bakymobile3],
    img : [bakymobile6],
    imgOrientation: "portrait",

  animatedTexts: {
    items: [],
    animationType: "slide",
  },
  direction:"row"
};
export const Items = [makeRes,floorMap,deposit,checkin];

export const TRSaio = [
  {
    title: "01. Easy Reservation Process",
    img: [aio1],
    imgOrientation: "portrait",
    icons: [],
  },
  {
    title: "02. Exclusive Zones & FloorPlans",
    img: [trs3],
    imgOrientation: "landscape",
    icons: [],
    },
  {
    title: "03. Login with  Apple , Google  & Facebook",
    img: [aio3],
    imgOrientation: "portrait",
    icons: [],
  },
  {
    title: "04. Reservation Deposits Collection",
    img: [aio4],
    imgOrientation: "landscape",
    icons: [],
  },
  {
    title: "05. Mobile App on both Android & iOS",
    img: [aio5],
    imgOrientation: "portrait",
    icons: [],
  },
  {
    title: "06. Multi Concept and Multi Location",
    img: [aio6],
    imgOrientation: "portrait",
    icons: [],
  },
];
