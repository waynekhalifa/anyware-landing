import posPayment from "../../public/images/posPayment.png";
import payMob from "../../public/images/paymob.png";
import visa from "../../public/images/visa.png";
import meeza from "../../public/images/meeza.png";
import masterCard from "../../public/images/masterCard.png";
import payment1 from "../../public/images/payment1.png";
import payment2 from "../../public/images/payment2.png";
import payment3 from "../../public/images/payment3.png";
import cashless1 from "../../public/images/cashless1.png";
import cashless2 from "../../public/images/cashless2.png";
import crmSol from "../../public/images/crmSol.png";
import tableReservation2 from "../../public/images/tableReservation2.png";
import tableReservation1 from "../../public/images/tableReservation1.png";
import survey1 from "../../public/images/survey1.png";
import survey2 from "../../public/images/survey2.png";
import survey3 from "../../public/images/survey3.png";
import onlineOrder from "../../public/images/onlineorder.png";
import onlineOrder2 from "../../public/images/onlineorder2.png";
import qrdineIn from "../../public/images/qrdinein.png";
import kiosk1 from "../../public/images/kiosk1.png";
import kiosk2 from "../../public/images/kiosk2.png";
import kiosk3 from "../../public/images/kiosk3.png";
import Tab4_1 from "../../public/images/4thTab1.png";
import Tab4_2 from "../../public/images/4thTab2.png";
import Tab5_1 from "../../public/images/5thTab1.png";
import Tab5_2 from "../../public/images/5thTab2.png";
import sec3tab1 from "../../public/images/sec3tab1.png";
import sec3tab2 from "../../public/images/sec3tab2.png";
import sec3tab2_1 from "../../public/images/sec3tab2_1.png";
import sec3tab2_2 from "../../public/images/sec3tab2_2.png";
export const items = [
  {
    title: "POS Payment Integrations",
    img: [posPayment],
    imgOrientation: "landscape",
    typo: "Guests can pay directly through an app on the payment terminal, print the bill, split the amount, and return the payment to the POS system.",
    animatedTexts: {
      items: [
        "Eliminate error rate.",
        "Secure transaction posting.",
        "Export to excel sheet option.",
        "Automated workflows & payment processing.",
        "24/7 live support.",
        "Split Check & Partial Payment Support.",
        "Tipping Percentage.",
      ],
      animationType: "stack",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "In-App Payments",
    img: [payment1, payment2, payment3],
    imgOrientation: "portrait",
    typo: "Offer your customers one-click payments, get in-app and mobile payment flows & keep them coming back.",
    animatedTexts: {
      items: [
        "Automated workflows & payment processing.",
        "Eliminate error rate.",
        "Effortless checkout experience.",
        "Mobile e-wallet support.",
      ],
      animationType: "stack",
    },
    icons: [visa, masterCard, meeza, payMob],
    direction: "row",
  },
  {
    title: "Cashless  Solution",
    img: [cashless1, cashless2],
    imgOrientation: "landscape",
    typo: "A chargeable wallet that can be in a form of contactless cards/wristbands for an extremely simple and safe method for customers to pay for their transactions.",
    animatedTexts: {
      items: [
        "Quicker and more convenient payment solution.",
        "Cards real-time reporting.",
        "Export to excel option.",
        "Maintaining useful guest information.",
      ],
      animationType: "stack",
    },
    icons: [],
    direction: "row",
  },
];

export const items2 = [
  {
    title: "Table Reservation System",
    img: [tableReservation1, tableReservation2],
    imgOrientation: "portrait",
    typo: "Showcase your venues within your branded Table Reservation App.",
    animatedTexts: {
      items: [
        "Handle full booking cycle with multiple add-on features",
        "Floor plan editor.",
        "Reporting dashboard includes all guest bookings details.",
        "Customizable customer flags.",
        "In-app comments.",
        "Single & multiple exception settings.",
      ],
      animationType: "stack",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "CRM Solution",
    img: [crmSol],
    imgOrientation: "landscape",
    typo: "Keep track of useful guest information with an all-inclusive CRM System",
    animatedTexts: {
      items: [
        "Keep track of useful guest information with an all-inclusive CRM System",
        "Secure guests' data storage.",
        "Speed up the process of order preparation.",
        "Make use of your customers data.",
        "24/7 live support.",
        "Display real-time reports, sales data analytics and more.",
      ],
      animationType: "stack",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "Feedback,Reviews & Surveys",
    img: [survey1, survey2],
    imgOrientation: "portrait",
    typo: "Enable your guests to share their feedback through Public/Private reviews.",
    animatedTexts: {
      items: [
        "Combine all orders from on-demand food delivery channels like Talabat, UberEats and Zomato in a single platform.",
      ],
      animationType: "none",
    },
    icons: [],
    direction: "row",
  },
];
export const items3 = [
  {
    title: "Online Ordering",
    img: [onlineOrder, onlineOrder2],
    imgOrientation: "portrait",
    typo: "Receive orders from your own branded application",
    animatedTexts: {
      items: ["Our applications support Delivery, Pickup & Drive-thru."],
      animationType: "none",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "QR Dine-in Self Ordering",
    img: [qrdineIn],
    imgOrientation: "landscape",
    typo: "Scan QR, Navigate through digital menu and add items to your cart easily.",
    animatedTexts: {
      items: ["Our applications support Pickup, Delivery & Dine-in."],
      animationType: "none",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "Self Service Kiosk",
    img: [kiosk1, kiosk2, kiosk3],
    imgOrientation: "portrait",
    typo: "Self-Service Kiosk, Quicker and more convenient ordering and payment solution.",
    animatedTexts: {
      items: [
        "Ability to seamlessly send orders to kitchen .",
        "Menu items integration and automatic update.",
        "Upselling option.",
        "Unlimited language support.",
      ],
      animationType: "stack",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "Call Center",
    img: [Tab4_1,Tab4_2],
    imgOrientation: "portrait",
    typo: "Ensure seamless synchronized orders made over the phone",
    animatedTexts: {
      items: [
        "Our applications support Pickup, Delivery & Dine-in.",
        "Customers data validation.",
        "Supports pick-up, delivery and order later options.",
        "Performance scorecards & Gamification.",
        "Automatic/Manual Away Status Update.",
        "Reports and analytics including KPI Reports for call center agents.",
        "Intuitive Admin Dashboard.",
        "Customer Profile with orders history log.",
      ],
      animationType: "slide",
    },
    icons: [],
    direction: "row",
  },
  {
    title: "Delivery Aggregator",
    img: [Tab5_1, Tab5_2],
    imgOrientation: "portrait",
    typo: "Simplify your Restaurant Operations",
    animatedTexts: {
      items: [
        "Combine all orders from on-demand food delivery channels like Talabat, UberEats and Zomato in a single platform.",
      ],
      animationType: "none",
    },
    icons: [],
    direction: "row",
  },
];

export const items4 = [
  {
    title: "Loyalty & Rewarding System",
    img: [sec3tab1,sec3tab2],
    imgOrientation: "portrait",
    typo: "Get your customers to collect points to redeem into gifts and  discounts.",
    animatedTexts: {
      items: [
        "Our applications support Delivery, Pickup & Drive-thru.",
        "Customizable Loyalty Tiers..",
        "Birthday Gifts and Giveaways.",
        "Points Acquisition & redemption rules.",
        "Guest Channels including Loyalty Cards (Magnetic, RFID or NFC), SMS, Email or QR codes.",
        "Redeem points into deals, voucher cards and discounts",
      ],
      animationType: "slide",
    },
    icons: [],
    direction: "column",
  },
  {
    title: "Packages Solution",
    img: [sec3tab2_1, sec3tab2_2],
    imgOrientation: "portrait",
    typo: "Create new tiered packages  with customizable benefits for your guests.",
    animatedTexts: {
      items: [
        "Seamless integration among all points of sale.",
      ],
      animationType: "none",
    },
    icons: [],
    direction: "column",
  },
  
];
export const allItems = [ items2, items3,items4,items];
