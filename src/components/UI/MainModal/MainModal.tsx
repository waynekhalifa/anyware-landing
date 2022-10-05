import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Backdrop, Box } from "@mui/material";
import ContentLoader from "../ContentLoader";
import ActionModal from "../ActionModal";
import useApp from "@/hooks/useApp";

const ModalForm = dynamic(() => import("../Forms/ModalForm"), {
  suspense: true,
});
const Catcher = dynamic(() => import("../Catcher"), { suspense: true });

const MainModal: React.FC = () => {
  const { modalOpen, modalID, modalContent, closeModal } = useApp();

  const renderModalContent = () => {
    switch (modalID) {
      case "joinUS":
        return <ModalForm title={`Student Application & registration`} />;
      case "actionButton":
        return <ActionModal action={modalContent} />;
      case "actionButton":
        return <ActionModal action={modalContent} />;
      case "catcher":
        return <Catcher />;
      default:
        return modalContent;
    }
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
          inset: 0,
          zIndex: 0,
          cursor: "pointer",
        }}
        onClick={closeModal}
      />
      <Suspense fallback={<ContentLoader />}>{renderModalContent()}</Suspense>
    </Backdrop>
  );
};

export default MainModal;
