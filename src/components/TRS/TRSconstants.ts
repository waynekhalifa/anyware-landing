import trs1 from "@images/trs1.webp";
import trs2 from "@images/trs2.webp";
import bakymobile4 from "@images/bakymobile4.webp"
import bakymobile5 from "@images/bakymobile5.webp"
import bakymobile6 from "@images/bakymobile6.webp"
import aio1 from "@images/aio1.webp"
import aio2 from "@images/aio2.webp"
import aio3 from "@images/aio3.webp"
import aio4 from "@images/aio4.webp"
import aio5 from "@images/aio5.webp"
import aio6 from "@images/aio6.webp"
const makeRes = {
  typo: "Make outings and special events reservations more easy!",
  Description:
    "Handle full booking cycle  in your venue with multiple add-on features.",
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
  typo: "Collect Reservation Deposits From your  App or website.",
  img : [bakymobile4,bakymobile5],
  Description:"Guests will pay upfront deposits in-app to confirm their spot reservation.",
    imgOrientation: "portrait",
  animatedTexts: {
    items: [],
    animationType: "none",
  },
  direction:"row-reverse"
};
const checkin = {
  typo: "Guests Check-in using In-app QR Codes.",
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
    img: [aio2],
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
