import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const partnersImages = [
  { id: 3, color: "#F4A81D", text: "Early Years" },
  { id: 7, color: "#13436B", text: "Key stage 1&2 " },
  { id: 2, color: "#83235F", text: "Secondary Education" },
  { id: 4, color: "#1B5633", text: "Asten Graduates" },
];

const Applications: React.FC = () => {
  const matches = useMediaQuery("(max-width:600px)");

  const justifyContent = (index: number) => {
    if (matches) return (index + 1) % 2 === 0 ? "flex-end" : "flex-start";

    if (index + 1 === 1) return "flex-start";
    if (index + 1 === 4) return "flex-start";

    return "center";
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ mt: { xs: 3, md: 0 } }}
    >
      {partnersImages.map((partner: any, index: number) => (
        <Grid
          item
          xs={6}
          sm={3}
          key={partner.id}
          display="flex"
          justifyContent={justifyContent(index)}
        >
          <Box
            sx={{
              width: { md: 240 },
              height: { xs: 240, md: 400 },
              maxWidth: { xs: 160, md: "100%" },
              mt: { md: 4 },
              backgroundColor: partner.color,
              borderRadius: 1,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box>
              <Box
                sx={{
                  height: { xs: 4, md: 12 },
                  backgroundColor: "common.white",
                  mb: 1,
                }}
              />
              <Typography
                variant={"h3"}
                align="center"
                sx={{
                  color: "common.white",
                  fontSize: { xs: 40, md: "72px" },
                  fontWeight: "500",
                  letterSpacing: { xs: "4px", md: "0px" },
                  marginLeft: { md: "-2px" },
                  mb: { xs: 1, md: 0 },
                }}
              >
                CORE
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: { xs: 104, md: 160 },
                mb: { xs: 2, md: 2 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: { xs: 4, md: 12 },
                  backgroundColor: "common.white",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: { xs: 4, md: 12 },
                  height: "100%",
                  backgroundColor: "common.white",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: { xs: 4, md: 12 },
                  height: "100%",
                  backgroundColor: "common.white",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "80%",
                  height: { xs: 4, md: 12 },
                  backgroundColor: "common.white",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "80%",
                  height: "100%",
                  color: "common.white",
                  margin: "auto",
                }}
              >
                <Typography
                  align="center"
                  variant={matches ? "body1" : "h5"}
                  textTransform={"uppercase"}
                  fontWeight={500}
                >
                  {partner.text}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                align="center"
                sx={{
                  marginBottom: { md: 1 },
                  color: "common.white",
                  fontWeight: "700",
                  fontSize: { xs: ".9rem", md: 24 },
                  letterSpacing: { xs: "0.1px" },
                }}
              >
                TWENTY FOUR
              </Typography>
              <Box
                sx={{
                  height: { xs: 4, md: 12 },
                  backgroundColor: "common.white",
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Applications;
