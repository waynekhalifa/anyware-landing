import posPayment from "../../public/images/posPayment.png";
import payMob from "../../public/images/paymob.png";
import visa from "../../public/images/visa.png";
import meeza from "../../public/images/meeza.png";
import masterCard from "../../public/images/masterCard.png";
import payment1 from "../../public/images/payment1.png"
import payment2 from "../../public/images/payment2.png"
import payment3 from "../../public/images/payment3.png"
import cashless1 from "../../public/images/cashless1.png"
import cashless2 from "../../public/images/cashless2.png"
export const Items = [
  {
    title: "POS Payment Integrations",
    img: [posPayment],
    imgOrientation:'landscape',
    typo: "Guests can pay directly through an app on the payment terminal, print the bill, split the amount, and return the payment to the POS system.",
    animatedTexts : {items : ["Eliminate error rate.","Secure transaction posting.","Export to excel sheet option.","Automated workflows & payment processing.","24/7 live support.","Split Check & Partial Payment Support.","Tipping Percentage."],animationType:"stack"},
    icons:[]
  },
  {
    title: "In-App Payments",
    img: [payment1,payment2,payment3],
    imgOrientation:'portrait',
    typo: "Offer your customers one-click payments, get in-app and mobile payment flows & keep them coming back.",
    animatedTexts : {items : ["Automated workflows & payment processing.","Eliminate error rate.","Effortless checkout experience.","Mobile e-wallet support."],animationType:"stack"},
    icons:[visa.src,masterCard.src,meeza.src,payMob.src]
  },
  {
    title: "Cashless  Solution",
    img: [cashless1,cashless2],
    imgOrientation:'landscape',
    typo: "A chargeable wallet that can be in a form of contactless cards/wristbands for an extremely simple and safe method for customers to pay for their transactions.",
    animatedTexts : {items : ["Quicker and more convenient payment solution.","Cards real-time reporting.","Export to excel option.","Maintaining useful guest information."],animationType:"stack"},
    icons:[]
  }
]

