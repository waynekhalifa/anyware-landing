import becomepartner from "../../../public/images/becomepartner.png"
import handshakeicon from "../../../public/images/handshakeicon.svg"
import recycleicon from "../../../public/images/recycleicon.svg"

const makeRes = {
  typo: "Partner with Anyware Software",
  Description:
    "Let's collaborate and help our customers from hospitality and F&B sector, together.",
    img : [becomepartner],
    imgOrientation: "landscape",
  animatedTexts: {
    items: [
     
    ],
    animationType: "slide",
  },
  direction:"row"
};

export const Items = [makeRes];

const program1 = {
  title : "Reseller Program",
  description: "Engage in our professional reseller channel partner program to grow our businesses globally together.",
  icon: recycleicon,
}
const program2 = {
  title : "Affiliate Marketers",
  description: "Get paid each time someone joins Anyware Software through your personal link—and earn more with every plan tier.",
  icon: handshakeicon,
}
export const programs = [program1,program2]