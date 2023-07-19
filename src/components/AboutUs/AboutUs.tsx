import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Section from "../UI/Section";
import axios from "axios";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import bannerBg from "../../../public/images/home-header-bg.png";
import millenium from "../../../public/images/millenium.svg";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png";
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.png";
import caf from "../../../public/images/CAF.png";
import { allItems } from "@/constants/features";
import useIsMobile from "@/hooks/useIsMobile";
import RocketIcon from '@mui/icons-material/RocketLaunch';
import Team from '@mui/icons-material/People';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import Image from "next/image";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import pic1 from '@images/pic1.png'
import pic2 from '@images/pic2.png'
import pic3 from '@images/pic3.png'
import pic4 from '@images/pic4.png'
const AboutUs: React.FC = () => {
  ReactGA.initialize("UA-267753856-1");
  ReactGA.set({ userId: "1241123459812" });
  const { isMobile } = useIsMobile();


  return (
    <Box>
        <Header/>
        <Box style={{
            width:'100%',
            height:isMobile?'30%':'50%',
            position:'absolute',
            backgroundColor:'#D7B35E',
            zIndex:-1,
            borderBottomLeftRadius:'20%'
            }}>
        </Box>
        {/* <Box style={{
            width:'50%',
            height:isMobile?'30%':'40%',
            position:'absolute',
            backgroundColor:'#D7B35E',
            zIndex:-1,
            borderRadius:'20%',
            transform:'rotate(-20deg)'
            }}>
        </Box> */}

    <Box sx={{ overflow: "hidden",width:'100%',marginTop:isMobile?'10%': '5%' }}>
      <Container sx={{overflow:'hidden'}}>
        <Section>
            <Grid item xs={12} md={6}>
                <Typography component="h1" variant="h3" fontSize={isMobile?20:50} fontWeight={700}sx={{color:'white', mb: 2,flexWrap:'wrap' }}>
                #1 Digitizing 
                <br />
                Software House
                </Typography>
                <Typography variant="body2" fontWeight={500} sx={{ color:'white',flexWrap:'wrap' }}>
                Specialized in developing innovative and creative services.
                </Typography>
            </Grid>
            {/* <Grid>
                <Image src={pic1} alt="act" width={88} height={13}/>
                <Image src={pic2} alt="act" width={80} height={40} />
                <Image src={pic3} alt="act" width={80} height={25} />
                <Image src={pic4} alt="act" width={80} height={25} />

            </Grid> */}
        </Section>

        {/* MISSION */}
            <Grid sx={{marginTop:'10%'}}>
            <Typography variant="body2" fontSize={20} sx={{ color:'#D7B35E',fontWeight:'bolder',marginBottom:2 }}>
                    Mission</Typography>   
                <Typography  variant="body2" fontSize={40} sx={{ color:'black',fontWeight:'bolder' }}
                >{<RocketIcon sx={{ verticalAlign: 'middle', marginRight: '5px',color:'#D7B35E',width:isMobile?'15%':'5%',height:isMobile?'15%':'5%' }} />}   Our mission</Typography>
                <Typography variant="body2" fontSize={15} sx={{ color:'black', width:isMobile?'100%':'70%'}}
                >We aim to enhance the business growth of our customers by providing faster speed,
                lower error rates, lower maintenance costs, digital innovation, growing revenues,
                operational efficiency and monitoring data through our high-quality cloud computing
                solutions and custom software development services, no matter your size. Whether your
                business operation is a globally recognized chain or a single independent location.
                </Typography>
            </Grid>

        {/* Team */}
            <Grid sx={{ marginTop: '10%' }}>
                <Typography variant="body2" fontSize={20} sx={{ color: '#D7B35E', fontWeight: 'bolder', marginBottom: 2 }}>Team</Typography>
                <Typography variant="body2" fontSize={40} sx={{ color: 'black', fontWeight: 'bolder' }}>
                <Team sx={{ verticalAlign: 'middle', marginRight: '5px', color: '#D7B35E',width:isMobile?'15%':'5%',height:isMobile?'15%':'5%' }} />   Our Team</Typography>
                <Typography variant="body2" fontSize={15} sx={{ color: 'black', width:isMobile?'100%':'70%' }}>
                    Our team is well versed with the inventive technologies and modern-day approaches ready to plan, configure, and
                    maintain networks, servers, cloud services, and support your business. We’re a team of honest experts in our
                    field building long-term, collaborative relationships with clients through measurable services. We make
                    ourselves available to our clients 24 hours a day, 7 days a week.
                </Typography>
            </Grid>

            {/* PROMISE */}
            <Grid sx={{ marginTop: '10%',mb:'15%' }}>
                <Typography variant="body2" fontSize={20} sx={{ color: '#D7B35E', fontWeight: 'bolder', marginBottom: 2 }}>Promise</Typography>
                <Typography variant="body2" fontSize={40} sx={{ color: 'black', fontWeight: 'bolder' }}>
                <ThumbUpOffAlt sx={{ verticalAlign: 'middle', marginRight: '5px', color: '#D7B35E',width:isMobile?'15%':'5%',height:isMobile?'15%':'5%' }} />   Our promise</Typography>
                <Typography variant="body2" fontSize={15} sx={{ color: 'black', width:isMobile?'100%':'70%' }}>
                We are committed to continuing development of our product based on the needs of our
                 clients and to providing quality services that exceed the expectations of our customers
                 . Our goal is to help our customers streamline their business processes and make the
                  technology a natural part of your day-to-day.
                </Typography>
            </Grid>
      </Container>

      
      <Footer/>
    </Box>
    </Box>
  );
};

export default AboutUs;
