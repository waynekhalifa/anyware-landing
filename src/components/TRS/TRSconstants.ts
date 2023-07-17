import trs1 from "../../../public/images/trs1.png";
import trs2 from "../../../public/images/trs2.png";
import bakymobile1 from "../../../public/images/bakymobile1.png"
import bakymobile2 from "../../../public/images/bakymobile2.png"
import bakymobile3 from "../../../public/images/bakymobile3.png"
import bakymobile4 from "../../../public/images/bakymobile4.png"
import bakymobile5 from "../../../public/images/bakymobile5.png"
import bakymobile6 from "../../../public/images/bakymobile6.png"
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
