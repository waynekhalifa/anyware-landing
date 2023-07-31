import kioskpage1 from "../../../public/images/kioskpage1.png";
import kioskpage2 from "../../../public/images/kioskpage2.png";
import kioskpage3 from "../../../public/images/kioskpage3.png";

import CashlessWallet4 from "../../../public/images/CashlessWallet4.png";
import CashlessWallet5 from "../../../public/images/CashlessWallet5.png";
const makeRes = {
  typo: "Self-Ordering Kiosk Solution for restaurants",
  Description:"Your perfect go-to in order to forget about long waiting queues in events and forever!", 
    img : [kioskpage1,kioskpage2],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
        "Kiosk status indicator (online/offline)",
        "Admin panel to configure menu items details",
        "Seamlessly sends orders to kitchen",
        "Seamlessly integrated with POS",
        "Reporting capabilities including orders and transactions per kiosk",
        
    ],
    animationType: "slide",
  },
  direction:"row",
  header:'SELF SERVICE KIOSK'
};
const floorMap = {
  typo: "Self Check-in/out Kiosk Solution for hotels & resorts",
  Description:
    "The optimal solution to expedite the check-in /out process & forget about long waiting queues in events and forever!",
    img : [kioskpage3],
    imgOrientation: "landscape",

  animatedTexts: {
    items: [
        "Kiosk status indicator (online/offline)",
        "Seamlessly integrated with PMS",
        "Reporting  and check-in/check-out details per kiosk"
    ],
    animationType: "slide",
  },
  direction:"row",
  header:'SELF SERVICE KIOSK'
};

export const Items = [makeRes,floorMap];