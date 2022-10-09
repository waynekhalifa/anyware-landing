import { createArray } from "@/helpers/utils";
import useFeature from "@/hooks/useFeature";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface Props {
  completed: boolean;
  selectedFeatures: any;
}

interface StateProps {
  months: number;
}

const initialState: StateProps = { months: 1 };

const PriceCalculator: React.FC<Props> = ({ completed, selectedFeatures }) => {
  const [state, setState] = useState(initialState);
  const { featuresListing } = useFeature("features", "feature");
  const { months } = state;
  let price = 0;
  const features = featuresListing.filter((feature: any) =>
    selectedFeatures.has(feature.id)
  );

  for (let feature of features) {
    price = price + feature.price;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 200,
        right: "4%",
        border: "1px solid",
        borderColor: "divider",
        zIndex: 10,
        backgroundColor: "common.white",
        width: "18%",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: completed ? 1 : 0,
          backgroundColor: !completed ? "transparent" : "rgba(255,255,255,.7)",
        }}
      />
      <Box
        sx={{
          p: "8px 16px",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography gutterBottom fontWeight={700}>
          Your monthly installment:
        </Typography>
        <Typography
          variant="h4"
          align="right"
          fontWeight={700}
          sx={{ color: "primary.main" }}
        >
          EGP {price * months}
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography fontWeight={700} gutterBottom>
            Selected Features:
          </Typography>
          <Box sx={{ ml: "-4px" }}>
            {features.map((feature: any) => (
              <Typography
                key={feature.id}
                variant="body2"
                component="span"
                sx={{
                  boxShadow: 3,
                  p: 1,
                  borderRadius: "4px",
                  margin: "4px",
                  display: "inline-block",
                }}
              >
                {feature.title}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography fontWeight={700} gutterBottom>
            Months:
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={months.toString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, months: parseInt(event.target.value) })
            }
          >
            {createArray(12).map((option: number) => (
              <MenuItem key={option + 1} value={(option + 1).toString()}>
                {option + 1}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceCalculator;
