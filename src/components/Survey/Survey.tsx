import { Box } from "@mui/material";

import Questions from "./Questions";

const Survey: React.FC = () => {
  return (
    <>
      <Box sx={{ height: 400 }} />
      <Questions />
      <Box
        sx={{
          backgroundColor: "primary.light",
          transition: "all .2s cubic-bezier(.785,.135,.15,.86) 0s",
          width: "20%",
          height: "100%",
          position: "fixed",
          right: "0",
          top: "0",
        }}
      >
        <Box sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "30px",
              height: "30px",
              borderRadius: "30px",
              top: "30px",
              right: "60px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "250px",
              height: "250px",
              borderRadius: "250px",
              top: "60px",
              left: "-125px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "25px",
              height: "25px",
              borderRadius: "25px",
              top: "350px",
              left: "30px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "15px",
              height: "15px",
              borderRadius: "15px",
              bottom: "350px",
              right: "40px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "130px",
              height: "130px",
              borderRadius: "130px",
              bottom: "150px",
              right: "-65px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Survey;
