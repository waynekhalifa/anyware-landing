import { createArray } from "@/helpers/utils";
import useFeature from "@/hooks/useFeature";
import { Alert, Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import useApp from "@/hooks/useApp";

interface Props {
  completed: boolean;
  selectedFeatures: any;
  handleSelectedMonth:(color:any)=>void
  handleTotalPrice:(color:any)=>void
}

interface StateProps {
  months: number;
}

const initialState: StateProps = { months: 1 };

const PriceCalculator: React.FC<Props> = ({ completed, selectedFeatures,handleSelectedMonth,handleTotalPrice }) => {
const { isMobile } = useIsMobile();

  const [state, setState] = useState(initialState);
  const { featuresListing } = useFeature("features", "feature");
  const { months } = state;
  let price = 0;
  const features = featuresListing.filter((feature: any) =>
    selectedFeatures.has(feature.title)
  );

  for (let feature of features) {
    price = price + feature.price;
  }
  handleTotalPrice(price*months)
  handleSelectedMonth(months)
  const [alert,setAlert]=useState(false)

  return (
    <Box
      sx={isMobile?{
        // position: "fixed",
        // top: 200,
        // right: "4%",
      
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border: "1px solid",
        borderColor: "divider",
        zIndex: 10,
        backgroundColor: "common.white",
        width: "100%",
        padding:'1rem',
        borderRadius: 2,
      }:{
        position: "fixed",
        top: '10%',
        right: "4%",
        border: "1px solid",
        borderColor: "divider",
        zIndex: 10,
        backgroundColor: "common.white",
        width: "18%",
        borderRadius: "4px",}}
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
        <Typography gutterBottom fontWeight={700} fontSize={'1rem'}>
          Your monthly installment:
        </Typography>
        <Typography
          variant="h4"
          align="right"
          fontWeight={700}
          sx={{ color: "primary.main",textAlign:'center'}}
        >
          {price * months} USD
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
      <Typography onClick={()=>{setAlert(true)}} sx={{margin:2,cursor:'pointer'}} fontSize={14}>Press here for a special discount</Typography>
      {<div style={{opacity:alert?1:0,transition:'opacity 0.5s ease-in-out',position:'absolute',bottom:-60,width:'110%',marginLeft:isMobile?0:-15}}>
      <Alert onClose={() => {setAlert(false)}}>We will contact you shortly {":)"}</Alert>
      </div>}
    </Box>
  );
};

export default PriceCalculator;
