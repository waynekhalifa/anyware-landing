import { useDispatch } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeModal } from "@/store/appSlice";
import HtmlContent from "../HtmlContent";

interface Props {
  action: any;
}

const ActionModal: React.FC<Props> = ({ action }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 600,
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "grey.200",
          padding: "8px 16px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">{action.title}</Typography>
        <CloseIcon
          aria-label="close modal"
          onClick={() => dispatch(closeModal({}))}
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <Paper
        square
        elevation={0}
        sx={{
          backgroundColor: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{ p: 2, color: "text.secondary", a: { wordWrap: "break-word" } }}
        >
          <HtmlContent content={action.content} />
        </Box>
      </Paper>
    </Box>
  );
};

export default ActionModal;
