import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import {programs,Items} from "./BecomePartnerConstants"
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import Footer from "../Footer/Footer";
import millenium from "../../../public/images/millenium.png";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.webp";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.webp";
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.webp";
import caf from "../../../public/images/CAF.webp";
import BecomePartnerCard from "./BecomePartnerCard";
import PartnerProgramCard from "./PartnerProgramCard";
import anywarepartner from "../../../public/images/anywarepartner.png";
import { useState } from "react";
const BecomePartner: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const venues = [millenium,movenpick, jeddah, caffe, caf];
  const [selected,setSelected] = useState(-1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflowX:"clip",
                paddingTop: isMobile ? 20 : 120,
      }}
    >
      <Header />
      <Grid xs={12} sx={{margin:0,padding:0,width:'100%'}}>
     <BecomePartnerCard index={0} items={Items[0]} />
        </Grid>
     <Grid xs={12} sx={{marginTop:isMobile?5:10}}>
            <Typography
              color="text.secondary"
              align="center"
              variant="body2"
              fontWeight="bold"
              letterSpacing={1.2}
              paragraph
            >
              Join 100+ Highly Rated Hospitality Leaders
            </Typography>
          </Grid>
          <Grid
            xs={12}
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              
              
            }}
          >
            {venues.map((venue, index) => {
              return (
                <Grid key={index} xs={isMobile ? 5 : undefined} style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
                  <NextImage
                    alt="Banner background"
                    layout="fixed"
                    width="280px"
                    height="140px"
                    objectFit="contain"
                    src={venue.src}
                    style={{opacity:'0.7'}}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid container spacing={4} style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',flexWrap:'wrap',flexDirection:'row'}} >
            {programs.map((program : any, index:number)=>(
          <Grid key={index} xs={12} sx={{width:isMobile?'80%':'20%',minHeight:400,marginTop:isMobile? 0:5}} onMouseEnter={()=>setSelected(index)} onMouseLeave={()=>setSelected(-1)} >
        <PartnerProgramCard items={program} index={index} selected={selected}/>
          </Grid>
            ))}
          </Grid>
          <Grid xs={isMobile ? 5 : undefined} style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
                  <NextImage
                    alt="Banner background"
                    layout="fixed"
                    width="280px"
                    height="140px"
                    objectFit="contain"
                    src={anywarepartner.src}
                  />
                </Grid>
      <Footer/>
    </div>
  );
};

export default BecomePartner;
