import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";

interface Props {
  tabs: any;
  items: any;
}
const FeaturedCard: React.FC<Props> = ({ tabs, items }) => {
  const [selectedTap, setSelectedTap] = useState(0);
  const choosenItem = items.filter((item: any) => item.title === selectedTap);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTap(newValue);
  };
const {isMobile} = useIsMobile();
  return (
    <Container style={{ marginBottom: "10vh", backgroundColor: "#FFF7D4",
    borderRadius: "20px",width:'100%',display:'flex',alignItems:'center',flexDirection:'column',overflow:'hidden'}}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: 380+items[selectedTap].animatedTexts.items.length*50 + "px",      
        }}
      >
        <Tabs
          value={selectedTap}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="scrollable prevent tabs example"
          style={{ maxWidth: "100%", marginBottom: "2rem" }}
        >
          {tabs.map((tab: any, index: number) => (
            <Tab
              key={index}
              sx={{
                textTransform: "capitalize",
                mr: 2,
                fontSize: "1rem",
                fontWeight: 600,
                color: "text.primary",
              }}
              label={tab}
            />
          ))}
        </Tabs>
        
        <Grid container spacing={4} sx={{ maxWidth: "90%",  }}>
          <Grid xs={6}>
            <Typography
              variant="h4"
              style={{ fontWeight: "600", fontSize: isMobile ? "1rem" : "2rem" }}
            >
              {items[selectedTap].typo}
            </Typography>
            
              {/* <Box sx={display:'flex',flexDirection:'row',maxHeight:'20%'}>
                
              </Box> */}
            
            <AnimatedTexts texts={items[selectedTap].animatedTexts.items} interval={2}/>
          </Grid>
          <Grid xs={6} sx={{maxHeight:'800px'}}>
          <Box style={{width:'100%',height:items[selectedTap].imgOrientation==="landscape" ? "200px":'500px',position:'relative'}}>
              {/* <img alt="anyware software" src={items[selectedTap].img[0]} style={{width:"100%",height:"100%",objectFit:'contain'}} /> */}
              <FadingImages images={items[selectedTap].img} interval={3}  />
            </Box>
          </Grid>
          
        </Grid>
      </Box>
      <Box style={{backgroundColor:"#FFD95A",minWidth:"105%",minHeight:"70px",alignItems:"center",justifyContent:"center",display:"flex",marginTop:15}}>
       
            <Button
              variant="text"
              sx={{ backgroundColor: "transparent",
              borderColor:'transparent',transition:'0.4s ease-in-out',fontSize:'1rem',
              color:"black",fontWeight:"600",textTransform: "capitalize" ,
              "&:hover": {
                backgroundColor: "#fff",
                borderColor: "#fff",
                boxShadow: '0px 0px 6px #eee'                
              },}}
              endIcon={<svg width="16" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z" fill="#C07F00"></path></svg>
}
            >
              Get Started
            </Button>
              </Box>
        
        
    </Container>
  );
};

export default FeaturedCard;
