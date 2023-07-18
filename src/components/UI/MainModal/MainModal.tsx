import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Backdrop, Box } from "@mui/material";
import ContentLoader from "../ContentLoader";
import useApp from "@/hooks/useApp";

const Catcher = dynamic(() => import("../Catcher"), { suspense: true });
const Contact = dynamic(() => import("../../ContactUs/ContactUs"), { suspense: true });

const MainModal: React.FC = () => {
  const { modalOpen, modalID, modalContent, closeModal } = useApp();

  const renderModalContent = () => {
    switch (modalID) {
      case "catcher":
        return <Catcher />;
      case "contact":
        return <Contact />;  
      default:
        return modalContent;
    }
  };
  
  const handleFormScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        alignItems: "flex-start",
      }}
      open={modalOpen}
    >
      <Box
        sx={{
          position: "absolute",
          // inset: 0,
          zIndex: 0,
          // cursor: "pointer",
        }}
        onWheel={handleFormScroll}

        // onClick={closeModal}
      />
      <Suspense fallback={<ContentLoader />}>{renderModalContent()}</Suspense>
    </Backdrop>
  );
};

export default MainModal;
