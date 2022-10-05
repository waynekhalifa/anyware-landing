import { Box } from "@mui/material";

const CustomLoader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "inline-block",
        position: "relative",
        width: 80,
        height: 13,
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        "& div": {
          position: "absolute",
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          background: "#fff",
          animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",

          "&:nth-child(1)": {
            left: "8px",
            animation: "lds-ellipsis1 0.6s infinite",
          },
          "&:nth-child(2)": {
            left: "8px",
            animation: "lds-ellipsis2 0.6s infinite",
          },
          "&:nth-child(3)": {
            left: "32px",
            animation: "lds-ellipsis2 0.6s infinite",
          },
          "&:nth-child(4)": {
            left: "56px",
            animation: "lds-ellipsis3 0.6s infinite",
          },
        },
      }}
    >
      <Box />
      <Box />
      <Box />
      <Box />
    </Box>
  );
};

export default CustomLoader;
