const features: any[] = [
  {
    id: 1,
    title: "Call Center Solution",
    desc: `Ensures orders made over the phone are logged and processed alongside any other channel to simplify the business operations.`,
    icon: "/icons/call-center.svg",
    path: "#",
  },
  {
    id: 2,
    title: "Packages Solution",
    desc: `Customizable packages with  added benefits list for the customers’ ability to buy package and leverage from these benefits.`,
    icon: "/icons/dropbox.svg",
    path: "#",
  },
  {
    id: 3,
    title: "Loyalty Solution",
    desc: `Classify customers into loyalty tiers  with the ability to collect points to redeem into gifts and  discounts.`,
    icon: "/icons/heart.svg",
    path: "#",
  },
  {
    id: 4,
    title: "QR Dine-in Ordering",
    desc: `Guests can scan QR code to navigate restaurant digital menu and place their order without any staff interaction.`,
    icon: "/icons/qrcode.svg",
    path: "#",
  },
  {
    id: 5,
    title: "Table Reservation",
    desc: `Enables restaurant  to fully manage the cycle of table bookings from guest app that displays/showcases your venues layout.`,
    icon: "/icons/table-reservation.svg",
    path: "#",
  },
  {
    id: 6,
    title: "Cloud Kitchen",
    desc: `All online orders are automatically synced with your existing POS or your Food Delivery mobile application.`,
    icon: "/icons/i-mac.svg",
    path: "#",
  },
  {
    id: 7,
    title: "Cashless Wallet",
    desc: `Digital chargeable wallet that is considered an extremely simple method for customers to pay for transactions quickly.`,
    icon: "/icons/cashless-wallet.svg",
    path: "#",
  },
  {
    id: 8,
    title: "Self-Service Kiosk",
    desc: `Your gateway to upsell menu items automatically enabling guests to order with multiple languages & reduced human assistance.`,
    icon: "/icons/kiosk.svg",
    path: "#",
  },
];

export async function listFeatures() {
  try {
    return features;
  } catch (err: any) {
    console.log(err);
  }
}
