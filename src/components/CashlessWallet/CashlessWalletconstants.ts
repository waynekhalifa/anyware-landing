import CashlessWallet1 from "../../../public/images/CashlessWallet1.webp";
import CashlessWallet2 from "../../../public/images/CashlessWallet2.webp";
import CashlessWallet3 from "../../../public/images/CashlessWallet3.webp";
import CashlessWallet4 from "../../../public/images/CashlessWallet4.webp";
import CashlessWallet5 from "../../../public/images/CashlessWallet5.webp";
const makeRes = {
  typo: "Collect  upfront  payments by getting your own cashless wallet!",
  Description:"An extremely simple and safe method for your guests to pay for their transactions!", 
    img : [CashlessWallet1,CashlessWallet2,CashlessWallet3],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
        "Chargeable RFID / NFC cards or bracelets.",
        "Display of points history and recent activities",
        "Charging bracelet/cards by outlet",
        "Split payment option",
        "In-App CRM & maintaining useful guest information",
        "Classify guests into groups option",
        "Prepaid and post-paid amounts"


    ],
    animationType: "slide",
  },
  direction:"row",
  header:'GET PAID EASILY'
};
const floorMap = {
  typo: "Get regular reports of your digital chargeable wallet.",
  Description:
    "Track wallet and hotel performance with business reports including top guests, top revenues and total spend with filter options.",
    img : [CashlessWallet4,CashlessWallet5],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
        "View & export all cards history and transactions",
        "An option to filter transactions by date.",
        "Revenue Report by agent."
    ],
    animationType: "slide",
  },
  direction:"row",
  header:'BUSINESS REPORTS'
};

export const Items = [makeRes,floorMap];
