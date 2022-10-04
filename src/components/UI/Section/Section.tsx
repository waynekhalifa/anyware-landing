import Box from "@mui/material/Box";
import React from "react";

import { commonWhite } from "../../../constants/colors";

interface SectionProps {
  background: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ background, children }) => (
  <Box
    component="section"
    sx={{
      pt: 9,
      pb: 11,
      background: (theme) =>
        background === "white" ? commonWhite(theme) : "transparent",
    }}
  >
    {children}
  </Box>
);

export default Section;
