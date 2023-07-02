import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  color: string;
  isSelected: boolean;
  onClick: any;
}

const Color: React.FC<Props> = ({ isSelected, color, onClick }) => {
  

  return (
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: "100%",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: isSelected ? color : "transparent",
      }}
    >
      {isSelected && (
        <CheckIcon fontSize="large" sx={{ color: "common.white" }} />
      )}
      {!isSelected && (
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: "100%",
            backgroundColor: color,
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            "&:hover": { transform: "scale(1.5)" },
          }}
          onClick={onClick}
        />
      )}
    </Box>
  );
};

export default Color;
