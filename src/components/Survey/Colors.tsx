import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Color from "./Color";

interface StateProps {
  color: string;
}

const initialState: StateProps = { color: "primary.main" };

const Colors: React.FC = () => {
  const [state, setState] = useState(initialState);

  const colors: string[] = [
    "primary.main",
    "rgb(123, 104, 238)",
    "rgb(255, 161, 47)",
    "rgb(255, 87, 34)",
    "rgb(244, 44, 44)",
    "rgb(248, 48, 109)",
    "rgb(255, 0, 252)",
    "rgb(65, 105, 225)",
    "rgb(95, 129, 255)",
    "rgb(10, 180, 255)",
    "rgb(8, 199, 224)",
    "rgb(7, 160, 146)",
    "rgb(29, 185, 84)",
    "rgb(46, 165, 44)",
    "rgb(117, 115, 128)",
    "rgb(32, 32, 32)",
  ];

  const handleClick = (color: string) => setState({ ...state, color });

  return (
    <>
      <Box
        sx={{
          backgroundColor: state.color,
          color: "common.white",
          width: 140,
          height: 140,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          mr: 4,
        }}
      >
        <Typography align="center" variant="h2">
          W
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 512 }}>
        {colors.map((color: string, index: number) => (
          <Color
            key={index}
            color={color}
            isSelected={color === state.color}
            onClick={(event: React.MouseEvent<unknown>) => handleClick(color)}
          />
        ))}
      </Box>
    </>
  );
};

export default Colors;
