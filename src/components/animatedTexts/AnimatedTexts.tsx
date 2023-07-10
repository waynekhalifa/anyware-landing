import { Container,Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextImage from 'next/image'
import checkGold from "../../../public/images/checkGold.png"

interface Props {
  texts: any;
  interval: number;
}
const AnimatedTexts: React.FC<Props> = ({ texts , interval}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTexts,setVisibleTexts] = useState([])
  const [counter, setCounter] = useState(0);  
//   const {isMobile} = useIsMobile();

  var visibles = [];
  useEffect(()=>{
    visibles = [];
      for(var i = 0 ; i<=currentIndex ; i++){
        visibles = visibles.concat(texts[i])
        }
        setVisibleTexts(visibles)
  },[currentIndex])

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (counter <= interval) {
        setCounter(counter + 1);
      }
      
    }, 1000);
    if(currentIndex>texts.length-1){
        setCurrentIndex(0)
      }
    return () => clearInterval(intervalTime);
  }, [counter,texts.length,interval,currentIndex]);

  useEffect(()=>{
    setCurrentIndex(0)
    setCounter(0)
  },[texts.length,interval])

  useEffect(() => {
      if (counter >= interval) {
        setCounter(0);
        if (currentIndex == texts.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);

        }
      }
      if(currentIndex>texts.length-1){
        setCurrentIndex(0)
        setCounter(0)
      }
    }, [counter,texts.length,interval,currentIndex,texts]);

  return (
    visibleTexts.length>0 &&  <Box sx={{display:'flex',flexDirection:'column',width :'100%' , height:'100%'}}>
        {visibleTexts.length>0 && currentIndex < texts.length && texts.map((text :any, index: any)=>(
                
                visibleTexts.length>0 && <Box key={index} style={{alignItems:"center",height:visibleTexts.includes(text)? "fit-content":"0px",display:"flex",columnGap:"0.5vw",flexDirection:"row",opacity:visibleTexts.includes(text)? 1:0,transition:"opacity 1s ease-in-out"}}>
             {visibleTexts.includes(text)  && <img src={checkGold.src} style={{width:"0.9rem"}} />}
             {visibleTexts.includes(text) && <p style={{fontWeight:"400",fontSize:"0.9rem",lineHeight:"1.7857142857"}}>{text}</p>}
              </Box>
            
              ))}
    </Box>
    )
};
export default AnimatedTexts
