import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, Box } from "@mui/material";
import { selectModalOpen, selectModalContent } from "@/store/appSlice";
import ContentLoader from "../ContentLoader";
import { closeModal } from "@/store/appSlice";
import ActionModal from "../ActionModal";

const ModalForm = dynamic(() => import("../Forms/ModalForm"), {
  suspense: true,
});

const MainModal: React.FC = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectModalOpen);
  const modalContent = useSelector(selectModalContent);

  const renderModalContent = () => {
    switch (modalContent.name) {
      case "joinUS":
        return <ModalForm title={`Student Application & registration`} />;
      case "actionButton":
        return <ActionModal action={modalContent.content} />;
      default:
        return null;
    }
  };

  const handleClose = () => {
    dispatch(closeModal({}));
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
        onClick={handleClose}
      />
      <Suspense fallback={<ContentLoader />}>{renderModalContent()}</Suspense>
    </Backdrop>
  );
};

export default MainModal;
