import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Section from "../UI/Section";
import axios from 'axios'
import ReactGA from 'react-ga';
import Video from "./Video";
import BannerForm from "./BannerForm";
import Partners from "./Partners";
import { useEffect, useState } from "react";
import bannerBg from "../../../public/images/home-header-bg.png";
import millenium from "../../../public/images/millenium.svg"
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png"
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png"
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.png"
import caf from "../../../public/images/CAF.png"
import onlineOrder from "../../../public/images/onlineorder.png"
import onlineOrder2 from "../../../public/images/onlineorder2.png"
import qrdineIn from "../../../public/images/qrdinein.png"
import kiosk1 from "../../../public/images/kiosk1.png"
import kiosk2 from "../../../public/images/kiosk2.png"
import kiosk3 from "../../../public/images/kiosk3.png"
import checkGold from "../../../public/images/checkGold.png"
import Tab4_1 from "../../../public/images/4thTab1.png"
import Tab4_2 from "../../../public/images/4thTab2.png"
import Tab5_1 from "../../../public/images/5thTab1.png"
import Tab5_2 from "../../../public/images/5thTab2.png"
import sec3tab1 from "../../../public/images/sec3tab1.png"
import sec3tab2 from "../../../public/images/sec3tab2.png"
import sec3tab2_1 from "../../../public/images/sec3tab2_1.png"
import sec3tab2_2 from "../../../public/images/sec3tab2_2.png"
import crmSol from "../../../public/images/crmSol.png"
import tableReservation2 from "../../../public/images/tableReservation2.png"
import tableReservation1 from "../../../public/images/tableReservation1.png"
import survey1 from "../../../public/images/survey1.png"
import survey2 from "../../../public/images/survey2.png"
import survey3 from "../../../public/images/survey3.png"
import posPayment from "../../../public/images/posPayment.png"
import payMob from "../../../public/images/paymob.png"
import visa from "../../../public/images/visa.png"
import meeza from "../../../public/images/meeza.png"
import masterCard from "../../../public/images/masterCard.png"
import payment1 from "../../../public/images/payment1.png"
import payment2 from "../../../public/images/payment2.png"
import payment3 from "../../../public/images/payment3.png"
import cashless1 from "../../../public/images/cashless1.png"
import cashless2 from "../../../public/images/cashless2.png"
import cashless3 from "../../../public/images/cashless3.png"
interface StateProps {
  videoKey: string;
}

const initialState: StateProps = {
  videoKey: new Date().toISOString(),
};

const Featured: React.FC = () => {
  ReactGA.initialize("UA-267753856-1")
  ReactGA.set({userId:"1241123459812"})
  const [state, setState] = useState(initialState);
  const { videoKey } = state;
  const [onlineorderImg,setOnlineOrderImg]=useState(1)
  const [surveyImg,setSurveyImg]=useState(1)
  const [kioskImg,setKioskImg]=useState(1)
  const [section2Tabs,setSection2Tabs]=useState(0)
  const [section3Tabs,setSection3Tabs]=useState(0)
  const [section4Tabs,setSection4Tabs]=useState(0)
  const [section5Tabs,setSection5Tabs]=useState(0)
  const [section2AnimatedP,setSection2AnimatedP]=useState(0)
  const [section3AnimatedP,setSection3AnimatedP]=useState(1)
  const [section5AnimatedP,setSection5AnimatedP]=useState(1)
  const [section2AnimatedP2,setSection2AnimatedP2]=useState(0)
  const [tab4,setTab4]=useState(1)
  const [tab5,setTab5]=useState(1)
  const getPosition=()=>{
    var box=document.getElementById("imagesDiv")
    console.log(box?.offsetHeight)
  }
  const useAnalyticsEventTracker = (category="Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
  const gaEventTracker = useAnalyticsEventTracker('Selected Tab');
  useEffect(()=>{
    getPosition()
    setTimeout(()=>{
      if(onlineorderImg==1){
        setOnlineOrderImg(2)
      }else{
        setOnlineOrderImg(1)
      }
      if(surveyImg<=2){
        setSurveyImg(surveyImg+1)
      }else{
        setSurveyImg(1)
      }
      if(kioskImg<=2){
        setKioskImg((kioskImg+1))
      }else{
        setKioskImg(1)
      }
      if(tab4==1){
        setTab4(2)
      }else{
        setTab4(1)
      }
      if(tab5==1){
        setTab5(2)
      }else{
        setTab5(1)
      }

    },3000)
    setTimeout(()=>{
      if(section2AnimatedP<=2){
        setSection2AnimatedP((section2AnimatedP+1))
      }else{
        setSection2AnimatedP(0)
        
      }
      if(section2AnimatedP2<=5){
        setSection2AnimatedP2((section2AnimatedP2+1))

      }else{
        setSection2AnimatedP2(0)
        
      }
      if(section3AnimatedP<=4){
        setSection3AnimatedP((section3AnimatedP+1))

      }else{
        setSection3AnimatedP(0)
        
      }
      if(section5AnimatedP<=7){
        setSection5AnimatedP((section5AnimatedP+1))
      }else{
        setSection5AnimatedP(0)
        
      }
      
    },1000)

    
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setState({ ...state, videoKey: new Date().toISOString() });
    }, 8000);
    

    return () => {
      clearInterval(interval);
    };
  });
  
  return (
    <Box sx={{ overflow: "hidden",width:"100%",position:"relative" }}>
      <img src={bannerBg.src} style={{  content: '""',
          display: "block",
          position: "absolute",
          top: "-42.016vh",
          left: "calc(65vw)",
          width: "37.1vw",
          height: "135.43vh",
          //webkitTransform: "translate(0,-28.5%)",
          // msTransform: "translate(0,-28.5%)",
          // transform: "translate(0,-28.5%)",
          transition: "unset",
          zIndex: -12,}}/>
      <Container sx={{ pt: 10 }}>
        <Section>
          <Grid container>
            <Grid item xs={12} md={6}>
              <BannerForm />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ span: { display: "block !important" } }}
            >
              <Video key={videoKey} />
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Typography
            color="text.secondary"
            align="center"
            variant="body2"
            fontWeight="bold"
            letterSpacing={1.2}
            paragraph
            sx={{ mt: 1 }}
          >
            JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
          </Typography>
          <Grid container justifyContent={"center"}>
            <Partners />
          </Grid>
        </Section>
      </Container>

      <Container>
        <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px"}}>
          <img src={millenium.src} style={{width:"18%"}}/>
          <img src={movenpick.src} style={{width:"18%"}}/>
          <img src={jeddah.src} style={{width:"18%"}}/>
          <img src={caffe.src} style={{width:"18%"}}/>
          <img src={caf.src} style={{width:"18%",height:"10%"}}/>
          
        </Box>
      </Container>
      <br></br>
      <Container style={{marginBottom:"10vh"}}>
      <Box style={{display:"flex",flexDirection:"column",justifyContent:"start",backgroundColor:"#FFF7D4",borderRadius:"20px",padding:"15px",position:"relative",marginBottom:"1vh",height:"fit-content"}}>
      <Box style={{display:"flex",flexDirection:"row",width:"100%"}}>
            
      <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section4Tabs==0?"underline":null,
                textDecorationColor:section4Tabs==0?"#C07F00":null,
                textDecorationThickness:section4Tabs==0? "5px":null,
                textUnderlineOffset:section4Tabs==0? "10px":null
              ,color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection4Tabs(0)}>Table Reservation System</Button>
            <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600, textDecoration:section4Tabs==1?"underline":null,
                textDecorationColor:section4Tabs==1?"#C07F00":null,
                textDecorationThickness:section4Tabs==1? "5px":null,
                textUnderlineOffset:section4Tabs==1? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection4Tabs(1)}>CRM Solution</Button>
              
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section4Tabs==2?"underline":null,
                textDecorationColor:section4Tabs==2?"#C07F00":null,
                textDecorationThickness:section4Tabs==2? "5px":null,
                textUnderlineOffset:section4Tabs==2? "10px":null
              ,color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection4Tabs(2)}>Feedback,Reviews & Surveys</Button>
              

          </Box>
          <br></br>
          <Box style={{width:"100%",height:"40%",display:"flex",flexDirection:"row",justifyContent:"start"}}>
          {section4Tabs==0 && <Box style={{width:"60%",height:"40%",display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <Box style={{width:"50%",height:"100%",display:"flex",flexDirection:"column"}}></Box>
            <Box style={{width:"90%",height:"100%"}}>
            <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Keep track of useful guest information with an all-inclusive CRM System</Typography>
            {section3AnimatedP>=1 && <Box style={{height:"fit-content"}}> 
              {section3AnimatedP>=1 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==1? "0px":"50%",height:section3AnimatedP==1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==1? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Secure guests' data storage.</p>
              </Box>}
              {section3AnimatedP>=2 &&  <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==2? "0px":"50%",height:section3AnimatedP==2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==2? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Speed up the process of order preparation.</p>
              </Box>}
              {section3AnimatedP>=3 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==3? "0px":"50%",height:section3AnimatedP==3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==3? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Make use of your customers data.</p>
              </Box>}
              {section3AnimatedP>=4 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==4? "0px":"50%",height:section3AnimatedP==4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==4? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Display real-time reports, sales data analytics and more.</p>
              </Box>}
              {section3AnimatedP>=5 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==5? "0px":"50%",height:section3AnimatedP==5? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==5? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>24/7 live support.</p>
              </Box>}
              </Box> }
              
              
            </Box>
              </Box>}
          {section4Tabs==0 && <Box style={{width:"50%",height:"100%",position:"relative"}}><img style={{width:"100%",height:"auto"}} src={crmSol.src}/></Box>}
          {section4Tabs==1 && <Box style={{width:"70%",height:"40%",display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <Box style={{width:"50%",height:"100%",display:"flex",flexDirection:"column"}}></Box>
            <Box style={{width:"100%",height:"100%"}}>
            <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Showcase your venues within your branded Table Reservation App.</Typography>
            <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Handle full booking cycle with multiple add-on features</p>
            {section3AnimatedP>=1 && <Box style={{height:"fit-content"}}> 
              {section3AnimatedP>=1 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==1? "0px":"50%",height:section3AnimatedP==1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==1? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Floor plan editor.</p>
              </Box>}
              {section3AnimatedP>=2 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==2? "0px":"50%",height:section3AnimatedP==2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==2? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Reporting dashboard includes all guest bookings details.</p>
              </Box>}
              {section3AnimatedP>=3 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==3? "0px":"50%",height:section3AnimatedP==3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==3? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Customizable customer flags.</p>
              </Box>}
              {section3AnimatedP>=4 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==4? "0px":"50%",height:section3AnimatedP==4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==4? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>In-app comments.</p>
              </Box>}
              {section3AnimatedP>=5 && <Box style={{alignItems:"center",position:"relative",left:section3AnimatedP==5? "0px":"50%",height:section3AnimatedP==5? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP==5? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Single & multiple exception settings.</p>
              </Box>}
              </Box> }
            
              
            </Box>
              </Box>}
          {section4Tabs==1 && <Box style={{width:"50%",height:"100%",position:"relative"}}>
              <img src={tableReservation1.src} style={{maxWidth: "100%",maxHeight: "100%",width:onlineorderImg==1?"100%":"0px",height:onlineorderImg==1? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==1? 1:0}}/>
              <img src={tableReservation2.src} style={{width:onlineorderImg==2?"50%":"0px",height:onlineorderImg==2? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==2? 1:0}}/>
              </Box>
          }
          {section4Tabs==2 && <Box style={{width:"70%",height:"40%",display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <Box style={{width:"50%",height:"100%",display:"flex",flexDirection:"column"}}></Box>
            <Box style={{width:"100%",height:"100%"}}>
            <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Enable your guests to share their feedback through Public/Private reviews.</Typography>
            <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Combine all orders from on-demand food delivery channels like Talabat, UberEats and Zomato in a single platform.</p>
              
            </Box>
              </Box>}
          {section4Tabs==2 && <Box id="imagesDiv" style={{width:"50%",height:"100%",position:"relative"}}>
              <img src={survey1.src} style={{width:surveyImg==1?"50%":"0px",height:surveyImg==1? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:surveyImg==1? 1:0}}/>
              <img src={survey2.src} style={{width:surveyImg>=2?"50%":"0px",height:surveyImg>=2? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:surveyImg>=2? 1:0}}/>
              <img src={survey3.src} style={{width:surveyImg==3?"50%":"0px",position:"absolute",top:"30%",height:surveyImg==3? "30%":"0px",left:surveyImg>=3? "-10%":"0%" ,transition:"opacity 1.5s ease-in-out",opacity:surveyImg>=3? 1:0}}/>

              </Box>
          }

          </Box>
          {/* <Box style={{width:"50%",position:"relative",display:"flex",flexDirection:"row",left:"35%"}}>
            <Box onClick={()=>setSection4Tabs(0)} style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",cursor:"pointer"}}>
            <Box style={{backgroundColor:"white",color:"black",borderRadius:"100%",fontWeight:"bold",textAlign:"center",width:"fit-content",padding:"2px",height:"fit-content",cursor:"pointer"}}> <label>01</label></Box>
            <Button  style={{fontWeight:"700",color:section4Tabs==0 ?"black":"rgb(185,190,199)",fontSize:"0.9rem"}}>CRM Solution</Button>
            </Box>
            <Box onClick={()=>setSection4Tabs(1)} style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center"}}>
            <Box style={{backgroundColor:"white",color:"black",borderRadius:"100%",fontWeight:"bold",textAlign:"center",width:"fit-content",padding:"2px",height:"fit-content",cursor:"pointer"}}> <label>02</label></Box>
            <Button  style={{fontWeight:"700",color:section4Tabs==1 ?"black":"rgb(185,190,199)",fontSize:"0.9rem"}}>Table Reservation System</Button>
            </Box>
            <Box onClick={()=>setSection4Tabs(2)} style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center"}}>
            <Box style={{backgroundColor:"white",color:"black",borderRadius:"100%",fontWeight:"bold",textAlign:"center",width:"fit-content",padding:"2px",height:"fit-content",cursor:"pointer"}}> <label>03</label></Box>
            <Button  style={{fontWeight:"700",color:section4Tabs==2 ?"black":"rgb(185,190,199)",fontSize:"0.9rem"}}>Feedback,Reviews & Surveys</Button>
            </Box>

          </Box> */}
          
          <Box style={{backgroundColor:"#FFD95A",width:"102%",left:"-1%",alignItems:"center",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",justifyContent:"center",display:"flex",position:"relative",marginBottom:"-14px"}}>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="transparent"} onMouseEnter={(event:any)=>event.target.style.backgroundColor="white"} endIcon={<svg width="16" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z" fill="#C07F00"></path></svg>
} style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"transparent",color:"black",fontWeight:"800"}}>
                Get Started
              </Button>

              </Box>


        </Box>

      </Container>

      <Container style={{marginBottom:"10vh"}}>
        <Box style={{display:"flex",flexDirection:"column",backgroundColor:"#FFF7D4",borderRadius:"20px",padding:"15px",position:"relative",marginBottom:"1vh",height:"fit-content"}}>
          <Box style={{display:"flex",flexDirection:"row"}}>
            <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600, textDecoration:section2Tabs==0?"underline":null,
                textDecorationColor:section2Tabs==0?"#C07F00":null,
                textDecorationThickness:section2Tabs==0? "5px":null,
                textUnderlineOffset:section2Tabs==0? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>{gaEventTracker("Online Ordering");setSection2Tabs(0)}}>Online Ordering</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section2Tabs==1?"underline":null,
                textDecorationColor:section2Tabs==1?"#C07F00":null,
                textDecorationThickness:section2Tabs==1? "5px":null,
                textUnderlineOffset:section2Tabs==1? "10px":null
              ,color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection2Tabs(1)}>QR Dine-in Self Ordering</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section2Tabs==2?"underline":null,
                textDecorationColor:section2Tabs==2?"#C07F00":null,
                textDecorationThickness:section2Tabs==2? "5px":null,
                textUnderlineOffset:section2Tabs==2? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection2Tabs(2)}>Self Service Kiosk</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section2Tabs==3?"underline":null,
                textDecorationColor:section2Tabs==3?"#C07F00":null,
                textDecorationThickness:section2Tabs==3? "5px":null,
                textUnderlineOffset:section2Tabs==3? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection2Tabs(3)}>Call Center</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section2Tabs==4?"underline":null,
                textDecorationColor:section2Tabs==4?"#C07F00":null,
                textDecorationThickness:section2Tabs==4? "5px":null,
                textUnderlineOffset:section2Tabs==4? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection2Tabs(4)}>Delivery Aggregator</Button>

          </Box>
          <br></br>
          {section2Tabs==0 && <Box style={{display:"flex",flexDirection:"row",columnGap:"2vw"}}>
            <Box style={{display:"felx",flexDirection:"column",rowGap:"0.5vh",width:"50%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Receive orders from your own branded application</Typography>
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Our applications support Delivery, Pickup & Drive-thru.</p>
              <br></br>
              <br></br>
              <br></br>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="#C07F00"} onMouseEnter={(event:any)=>event.target.style.backgroundColor= "#FFD95A"}  style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"#C07F00",color:"white",fontWeight:"800",position:"absolute",top:"80%"}}>
                Get Started
              </Button>

            </Box>
            <Box style={{width:"50%",height:"100%",maxHeight:"100%"}}>
              <img src={onlineOrder.src} style={{maxHeight:"100%",width:"100%",height:onlineorderImg==1? "83%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==1? 1:0}}/>
              <img src={onlineOrder2.src} style={{maxHeight:"100%",width:"100%",height:onlineorderImg==2? "83%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==2? 1:0}}/>

            </Box>

          </Box>}
          {section2Tabs==1 && <Box style={{display:"flex",flexDirection:"row",columnGap:"2vw"}}>
            <Box style={{display:"felx",flexDirection:"column",rowGap:"0.5vh",width:"50%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Scan QR, Navigate through digital menu and add items to your cart easily.</Typography>
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Our applications support Pickup, Delivery & Dine-in.</p>
              <br></br>
              <br></br>
              <br></br>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="#C07F00"} onMouseEnter={(event:any)=>event.target.style.backgroundColor= "#FFD95A"}  style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"#C07F00",color:"white",fontWeight:"800",position:"absolute",top:"80%"}}>
                Get Started
              </Button>

            </Box>
            <Box style={{width:"50%",maxHeight:"100%",height:"100%"}}>
              <img src={qrdineIn.src} style={{maxHeight:"100%",width:"100%",height:"83%"}}/>

            </Box>

          </Box>}
          {section2Tabs==2 && <Box style={{display:"flex",flexDirection:"row",columnGap:"2vw"}}>
            <Box style={{display:"felx",flexDirection:"column",rowGap:"0.5vh",width:"50%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Self-Service Kiosk, Quicker and more convenient ordering and payment solution.</Typography>
              <br></br>
              {section2AnimatedP>=0 && <Box style={{height:"fit-content"}}>
              {section2AnimatedP>=0 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP==0? "0px":"50%",height:section2AnimatedP==0? "fit-content":"0px",display:"flex",flexDirection:"row",columnGap:"0.5vw",opacity:section2AnimatedP==0? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Ability to seamlessly send orders to kitchen .</p>
              </Box>}
              {section2AnimatedP>=1 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP==1? "0px":"50%",height:section2AnimatedP==1? "fit-content":"0px",display:"flex",flexDirection:"row",columnGap:"0.5vw",opacity:section2AnimatedP==1? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Menu items integration and automatic update.</p>
              </Box>}
              {section2AnimatedP>=2 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP==2? "0px":"50%",height:section2AnimatedP==2? "fit-content":"0px",display:"flex",flexDirection:"row",columnGap:"0.5vw",opacity:section2AnimatedP==2? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Upselling option.</p>
              </Box>}
              {section2AnimatedP>=3 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP==3? "0px":"50%",height:section2AnimatedP==3? "fit-content":"0px",display:"flex",flexDirection:"row",columnGap:"0.5vw",opacity:section2AnimatedP==3? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Unlimited language support.</p>
              </Box>}

              </Box>}
              <br></br>
              <br></br>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="#C07F00"} onMouseEnter={(event:any)=>event.target.style.backgroundColor= "#FFD95A"}  style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"#C07F00",color:"white",fontWeight:"800",position:"absolute",top:"80%"}}>
                Get Started
              </Button>

            </Box>
            <Box style={{width:"50%",maxHeight:"50vh",height:"100%"}}>
              {/* position:"relative",maxHeight:"100%",maxWidth:"60%", */}
            <img src={kiosk1.src} style={{width:"100%",height:kioskImg==1? "1%":"0px",maxHeight:"50vh",transition:"opacity 1.5s ease-in-out",opacity:kioskImg==1? 1:0}}/>
            <img src={kiosk2.src} style={{width:"100%",height:kioskImg==2? "1%":"0px",maxHeight:"50vh",transition:"opacity 1.5s ease-in-out",opacity:kioskImg==2? 1:0}}/>
            <img src={kiosk3.src} style={{width:"80%",height:kioskImg==3? "1%":"0px",maxHeight:"45vh",transition:"opacity 1.5s ease-in-out",opacity:kioskImg==3? 1:0}}/>
            </Box>

          </Box>}
          {section2Tabs==3 && <Box style={{display:"flex",flexDirection:"row",columnGap:"2vw"}}>
            <Box style={{display:"felx",flexDirection:"column",rowGap:"0.5vh",width:"50%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Ensure seamless synchronized orders made over the phone</Typography>
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Our applications support Pickup, Delivery & Dine-in.</p>
              
              {section2AnimatedP2>=0 && <Box style={{height:"fit-content"}}> 
              {section2AnimatedP2>=0 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==0? "0px":"50%" ,height:section2AnimatedP2==0? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==0? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Customers data validation.</p>
              </Box>}
              {section2AnimatedP2>=1 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==1? "0px":"50%" ,height:section2AnimatedP2==1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==1? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Supports pick-up, delivery and order later options.</p>
              </Box>}
              {section2AnimatedP2>=2 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==2? "0px":"50%",height:section2AnimatedP2==2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==2? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Performance scorecards & Gamification.</p>
              </Box>}
              {section2AnimatedP2>=3 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==3? "0px":"50%",height:section2AnimatedP2==3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==3? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Automatic/Manual Away Status Update.</p>
              </Box>}
              {section2AnimatedP2>=4 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==4? "0px":"50%",height:section2AnimatedP2==4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==4? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Reports and analytics including KPI Reports for call center agents.</p>
              </Box>}
              {section2AnimatedP2>=5 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==5? "0px":"50%",height:section2AnimatedP2==5? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==5? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Intuitive Admin Dashboard.</p>
              </Box>}
              {section2AnimatedP2>=6 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==6? "0px":"50%",height:section2AnimatedP2==6? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==6? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Customer Profile with orders history log.</p>
              </Box>}
              </Box> }
              <br></br>
              
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="#C07F00"} onMouseEnter={(event:any)=>event.target.style.backgroundColor= "#FFD95A"}  style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"#C07F00",color:"white",fontWeight:"800",position:"absolute",top:"80%"}}>
                Get Started
              </Button>

            </Box>
            <Box style={{width:"50%",maxHeight:"83vh",minHeight:"83vh"}}>
            <img src={Tab4_1.src} style={{width:"100%",height:tab4==1? "83%":"0px",transition:"opacity 1.5s ease-in-out",opacity:tab4==1? 1:0}}/>
            <img src={Tab4_2.src} style={{width:"100%",height:tab4==2? "83%":"0px",transition:"opacity 1.5s ease-in-out",opacity:tab4==2? 1:0}}/>



            </Box>

          </Box>}
          {section2Tabs==4 && <Box style={{display:"flex",flexDirection:"row",columnGap:"2vw"}}>
            <Box style={{display:"felx",flexDirection:"column",rowGap:"0.5vh",width:"50%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Simplify your Restaurant Operations</Typography>
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Combine all orders from on-demand food delivery channels like Talabat, UberEats and Zomato in a single platform.</p>
              <br></br>
              <br></br>
              <br></br>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="#C07F00"} onMouseEnter={(event:any)=>event.target.style.backgroundColor= "#FFD95A"}  style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"#C07F00",color:"white",fontWeight:"800",position:"absolute",top:"80%"}}>
                Get Started
              </Button>

            </Box>
            <Box style={{width:"50%",maxHeight:"83vh",minHeight:"83vh"}}>
              <img src={Tab5_1.src} style={{width:"100%",height:tab5==1? "83%":"0px",transition:"opacity 1.5s ease-in-out",opacity:tab5==1? 1:0}}/>
              {/* <img src={Tab5_2.src} style={{width:"100%",height:tab5==2? "83%":"0px",transition:"opacity 1.5s ease-in-out",opacity:tab5==2? 1:0}}/> */}

            </Box>

          </Box>}


        </Box>
      </Container>

      <Container style={{marginBottom:"10vh"}}>
      <Box style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#FFF7D4",borderRadius:"20px",padding:"15px",position:"relative",marginBottom:"1vh",height:"fit-content"}}>
          <Box style={{display:"flex",flexDirection:"row"}}>
            <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600, textDecoration:section3Tabs==0?"underline":null,
                textDecorationColor:section3Tabs==0?"#C07F00":null,
                textDecorationThickness:section3Tabs==0? "5px":null,
                textUnderlineOffset:section3Tabs==0? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection3Tabs(0)}>Loyalty & Rewarding System</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section3Tabs==1?"underline":null,
                textDecorationColor:section3Tabs==1?"#C07F00":null,
                textDecorationThickness:section3Tabs==1? "5px":null,
                textUnderlineOffset:section3Tabs==1? "10px":null
              ,color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection3Tabs(1)}>Packages Solution</Button>
              

          </Box>
          <br></br>
          {section3Tabs==0 && <Box style={{display:"flex",flexDirection:"column",rowGap:"2vh",alignItems:"center",justifyContent:"center"}}>
            <Box style={{display:"flex",flexDirection:"column",rowGap:"0.5vh",height:"50%",alignItems:"center",justifyContent:"center",width:"70%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Get your customers to collect points to redeem into gifts and  discounts.</Typography>
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Our applications support Delivery, Pickup & Drive-thru.</p>
              {/* {section2AnimatedP2>=0 && <Box style={{height:"73vh",display:"flex",flexDirection:"column",justifyContent:"start"}}> 
              <Box style={{alignItems:"center",height:section2AnimatedP2>=0? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2>=0? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Customizable Loyalty Tiers..</p>
              </Box>
              {section2AnimatedP2>=1 && <Box><Box style={{alignItems:"center",height:section2AnimatedP2>=1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2>=1? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Birthday Gifts and Giveaways.</p>
              </Box>
              <Box style={{alignItems:"center",height:section2AnimatedP2==2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==2? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Points Acquisition & redemption rules.</p>
              </Box>
              <Box style={{alignItems:"center",height:section2AnimatedP2==3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==3? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Guest Channels including Loyalty Cards (Magnetic, RFID or NFC), SMS, Email or QR codes.</p>
              </Box>
              <Box style={{alignItems:"center",height:section2AnimatedP2==4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==4? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Redeem points into deals, voucher cards and discounts.</p>
              </Box>
              </Box>
              }
              </Box> } */}
              <Box style={{height:"fit-content",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start"}}>
              {section2AnimatedP2>=0 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==0? "0px":"50%", height:section2AnimatedP2==0? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==0? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out "}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Customizable Loyalty Tiers..</p>
              </Box>}
              {section2AnimatedP2>=1 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==1? "0px":"50%",height:section2AnimatedP2==1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==1? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Birthday Gifts and Giveaways.</p>
              </Box> }
              {section2AnimatedP2>=2 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==2? "0px":"50%",height:section2AnimatedP2==2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==2? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Points Acquisition & redemption rules.</p>
              </Box> }
              {section2AnimatedP2>=3 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==3? "0px":"50%",height:section2AnimatedP2==3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==3? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Guest Channels including Loyalty Cards (Magnetic, RFID or NFC), SMS, Email or QR codes.</p>
              </Box> }
              {section2AnimatedP2>=4 && <Box style={{alignItems:"center",position:"relative",left:section2AnimatedP2==4? "0px":"50%",height:section2AnimatedP2==4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section2AnimatedP2==4? 1:0,transition:"opacity 1s ease-in-out,left 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Redeem points into deals, voucher cards and discounts.</p>
              </Box> }
              </Box>
              

            </Box>
            <br></br>
            <Box style={{width:"100%",maxHeight:"50%",minHeight:"50%",justifyContent:"center",left:"40%",position:"relative"}}>
              <img src={sec3tab1.src} style={{maxHeight:"100%",width:onlineorderImg==1?"25%":"0px",height:onlineorderImg==1? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==1? 1:0}}/>
              <img src={sec3tab2.src} style={{maxHeight:"100%",width:onlineorderImg==2?"25%":"0px",height:onlineorderImg==2? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==2? 1:0}}/>

            </Box>
            <Box style={{backgroundColor:"#FFD95A",width:"102%",alignItems:"center",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",justifyContent:"center",display:"flex",position:"relative",marginBottom:"-14px"}}>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="transparent"} onMouseEnter={(event:any)=>event.target.style.backgroundColor="white"} endIcon={<svg width="16" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z" fill="#C07F00"></path></svg>
} style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"transparent",color:"black",fontWeight:"800"}}>
                Get Started
              </Button>

              </Box>

          </Box>}
          {section3Tabs==1 && <Box style={{display:"flex",flexDirection:"column",rowGap:"2vh",alignItems:"center",justifyContent:"center"}}>
            <Box style={{display:"flex",flexDirection:"column",rowGap:"0.5vh",height:"50%",alignItems:"center",justifyContent:"center",width:"70%"}}>
              <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Create new tiered packages  with customizable benefits for your guests.</Typography>
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Seamless integration among all points of sale.</p>
             
              

            </Box>
            <Box style={{width:"100%",height:"50%",maxHeight:"50%",minHeight:"50%",justifyContent:"center",left:"40%",position:"relative"}}>
              <img src={sec3tab2_1.src} style={{width:onlineorderImg==1?"30%":"0px",height:onlineorderImg==1? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==1? 1:0}}/>
              <img src={sec3tab2_2.src} style={{width:onlineorderImg==2?"60%":"0px",position:"relative",left:onlineorderImg==2? "-11%":"0px", height:onlineorderImg==2? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==2? 1:0}}/>

            </Box>
            <Box style={{backgroundColor:"#FFD95A",width:"102%",alignItems:"center",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",justifyContent:"center",display:"flex",position:"relative",marginBottom:"-14px"}}>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="transparent"} onMouseEnter={(event:any)=>event.target.style.backgroundColor="white"} endIcon={<svg width="16" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z" fill="#C07F00"></path></svg>
} style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"transparent",color:"black",fontWeight:"800"}}>
                Get Started
              </Button>

              </Box>

          </Box>}


        </Box>

      </Container>

      <Container style={{marginBottom:"10vh"}}>
      <Box style={{display:"flex",flexDirection:"column",justifyContent:"start",backgroundColor:"#FFF7D4",borderRadius:"20px",padding:"15px",position:"relative",marginBottom:"1vh",height:"fit-content"}}>
      <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600, textDecoration:section5Tabs==0?"underline":null,
                textDecorationColor:section5Tabs==0?"#C07F00":null,
                textDecorationThickness:section5Tabs==0? "5px":null,
                textUnderlineOffset:section5Tabs==0? "10px":null,
              color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection5Tabs(0)}>POS Payment Integrations</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section5Tabs==1?"underline":null,
                textDecorationColor:section5Tabs==1?"#C07F00":null,
                textDecorationThickness:section5Tabs==1? "5px":null,
                textUnderlineOffset:section5Tabs==1? "10px":null
              ,color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection5Tabs(1)}>In-App Payments</Button>
              <Button sx={{ textTransform: "capitalize", mr: 2, fontSize:"1rem", fontWeight: 600,textDecoration:section5Tabs==2?"underline":null,
                textDecorationColor:section5Tabs==2?"#C07F00":null,
                textDecorationThickness:section5Tabs==2? "5px":null,
                textUnderlineOffset:section5Tabs==2? "10px":null
              ,color: "text.primary", ":hover":{
                textDecoration:"underline",
                textDecorationColor:"#C07F00",
                textDecorationThickness:"5px",
                textUnderlineOffset:"10px"
              } }} onClick={()=>setSection5Tabs(2)}>Cashless  Solution</Button>
              
              

          </Box>
          <br></br>
          <Box style={{width:"100%",height:"40%",display:"flex",flexDirection:"row",justifyContent:"start"}}>
          {section5Tabs==0 && <Box style={{width:"60%",height:"40%",display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <Box style={{width:"50%",height:"100%",display:"flex",flexDirection:"column"}}></Box>
            <Box style={{width:"100%",height:"100%"}}>
            <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Guests can pay directly through an app on the payment terminal, print the bill, split the amount, and return the payment to the POS system. </Typography>
            {section5AnimatedP>=1 && <Box style={{height:"86vh"}}> 
              <Box style={{alignItems:"center",height:section5AnimatedP>=1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=1? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Eliminate error rate.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=2? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Secure transaction posting.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=3? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Export to excel sheet option.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=4? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Automated workflows & payment processing.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=5? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=5? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>24/7 live support.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=6? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=6? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Full Payment.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=7? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=7? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Split Check & Partial Payment Support.</p>
              </Box>
              <Box style={{alignItems:"center",height:section5AnimatedP>=8? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section5AnimatedP>=8? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Tipping Percentage.</p>
              </Box>
              </Box> }
              {!(section5AnimatedP>=1) && <Box style={{height:"86vh"}}></Box>}
              
            </Box>
              </Box>}
          {section5Tabs==0 && <Box style={{width:"50%",height:"100%",position:"relative"}}><img style={{width:"100%",height:"100%"}} src={posPayment.src}/></Box>}
          {section5Tabs==1 && <Box style={{width:"60%",height:"40%",display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <Box style={{width:"50%",height:"100%",display:"flex",flexDirection:"column"}}></Box>
            <Box style={{width:"100%",height:"100%"}}>
            <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>Offer your customers one-click payments, get in-app and mobile payment flows & keep them coming back.</Typography>
            <Box style={{display:"flex",flexGrow:"1",flexDirection:"row",columnGap:"1vw",justifyContent:"start",width:"90%",alignItems:"center"}}>
              <img src={visa.src} style={{width:"25%",height:"100%"}}/>
              <img src={masterCard.src} style={{width:"25%",height:"100%"}}/>
              <img src={meeza.src} style={{width:"25%",height:"100%"}}/>
              <img src={payMob.src} style={{width:"25%",height:"100%"}}/>
            </Box>
            {section3AnimatedP>=1 && <Box style={{height:"73vh"}}> 
              <Box style={{alignItems:"center",height:section3AnimatedP>=1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=1? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Automated workflows & payment processing.</p>
              </Box>
              <Box style={{alignItems:"center",height:section3AnimatedP>=2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=2? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Eliminate error rate.</p>
              </Box>
              <Box style={{alignItems:"center",height:section3AnimatedP>=3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=3? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Effortless checkout experience.</p>
              </Box>
              <Box style={{alignItems:"center",height:section3AnimatedP>=4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=4? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Mobile e-wallet support.</p>
              </Box>
              </Box> }
              {!(section3AnimatedP>=1) && <Box style={{height:"73vh"}}></Box>}
              
            </Box>
              </Box>}
          {section5Tabs==1 && <Box style={{width:"50%",height:"100%",position:"relative"}}>
              <img src={payment1.src} style={{width:surveyImg==1?"50%":"0px",position:"relative",left:"20%",height:surveyImg==1? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:surveyImg==1? 1:0}}/>
              <img src={payment2.src} style={{width:surveyImg==2?"50%":"0px",position:"relative",left:"20%",height:surveyImg==2? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:surveyImg==2? 1:0}}/>
              <img src={payment3.src} style={{width:surveyImg==3?"50%":"0px",position:"relative",left:"20%",height:surveyImg==3? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:surveyImg==3? 1:0}}/>

              </Box>
          }
          {section5Tabs==2 && <Box style={{width:"60%",height:"40%",display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <Box style={{width:"50%",height:"100%",display:"flex",flexDirection:"column"}}></Box>
            <Box style={{width:"95%",height:"100%"}}>
            <Typography variant="h4" style={{fontWeight:"600",fontSize:"2.25rem"}}>A chargeable wallet that can be in a form of contactless cards/wristbands for an extremely simple and safe method for customers to pay for their transactions.</Typography>
            {section3AnimatedP>=1 && <Box style={{height:"73vh"}}> 
              <Box style={{alignItems:"center",height:section3AnimatedP>=1? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=1? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Quicker and more convenient payment solution.</p>
              </Box>
              <Box style={{alignItems:"center",height:section3AnimatedP>=2? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=2? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Cards real-time reporting.</p>
              </Box>
              <Box style={{alignItems:"center",height:section3AnimatedP>=3? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=3? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Export to excel option.</p>
              </Box>
              <Box style={{alignItems:"center",height:section3AnimatedP>=4? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:section3AnimatedP>=4? 1:0,transition:"opacity 1s ease-in-out"}}>
              <img src={checkGold.src} style={{width:"0.9rem"}} />
              <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>Maintaining useful guest information.</p>
              </Box>
              </Box> }
              {!(section3AnimatedP>=1) && <Box style={{height:"73vh"}}></Box>}              
            </Box>
              </Box>}
          {section5Tabs==2 && <Box id="imagesDiv" style={{width:"50%",height:"100%",position:"relative"}}>
              <img src={cashless1.src} style={{width:onlineorderImg==1?"100%":"0px",height:onlineorderImg==1? "100%":"0px",transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg==1? 1:0}}/>
              <img src={cashless2.src} style={{width:onlineorderImg>=2?"100%":"0px",height:onlineorderImg>=2? "100%":"0px" ,transition:"opacity 1.5s ease-in-out",opacity:onlineorderImg>=2? 1:0}}/>

              </Box>
          }

          </Box>
          {/* <Box style={{width:"50%",position:"relative",display:"flex",flexDirection:"row",left:"35%"}}>
            <Box onClick={()=>setSection4Tabs(0)} style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",cursor:"pointer"}}>
            <Box style={{backgroundColor:"white",color:"black",borderRadius:"100%",fontWeight:"bold",textAlign:"center",width:"fit-content",padding:"2px",height:"fit-content",cursor:"pointer"}}> <label>01</label></Box>
            <Button  style={{fontWeight:"700",color:section4Tabs==0 ?"black":"rgb(185,190,199)",fontSize:"0.9rem"}}>CRM Solution</Button>
            </Box>
            <Box onClick={()=>setSection4Tabs(1)} style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center"}}>
            <Box style={{backgroundColor:"white",color:"black",borderRadius:"100%",fontWeight:"bold",textAlign:"center",width:"fit-content",padding:"2px",height:"fit-content",cursor:"pointer"}}> <label>02</label></Box>
            <Button  style={{fontWeight:"700",color:section4Tabs==1 ?"black":"rgb(185,190,199)",fontSize:"0.9rem"}}>Table Reservation System</Button>
            </Box>
            <Box onClick={()=>setSection4Tabs(2)} style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center"}}>
            <Box style={{backgroundColor:"white",color:"black",borderRadius:"100%",fontWeight:"bold",textAlign:"center",width:"fit-content",padding:"2px",height:"fit-content",cursor:"pointer"}}> <label>03</label></Box>
            <Button  style={{fontWeight:"700",color:section4Tabs==2 ?"black":"rgb(185,190,199)",fontSize:"0.9rem"}}>Feedback,Reviews & Surveys</Button>
            </Box>

          </Box> */}
          
          <Box style={{backgroundColor:"#FFD95A",width:"102%",left:"-1%",alignItems:"center",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",justifyContent:"center",display:"flex",position:"relative",marginBottom:"-14px"}}>
              <Button onMouseLeave={(event:any)=>event.target.style.backgroundColor="transparent"} onMouseEnter={(event:any)=>event.target.style.backgroundColor="white"} endIcon={<svg width="16" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z" fill="#C07F00"></path></svg>
} style={{padding:"1.25rem 1.875rem",fontSize:"1rem",backgroundColor:"transparent",color:"black",fontWeight:"800"}}>
                Get Started
              </Button>

              </Box>


        </Box>

      </Container>

     

    </Box>
  );
};

export default Featured;
