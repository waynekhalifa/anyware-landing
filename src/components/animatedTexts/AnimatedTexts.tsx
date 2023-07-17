import { Container,Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextImage from 'next/image'
import checkGold from "../../../public/images/checkGold.png"
import useIsMobile from "@/hooks/useIsMobile";

interface Props {
  texts: string[];
  interval: number;
  animationType:string,
  direction : string
}
const AnimatedTexts: React.FC<Props> = ({ texts , interval,animationType,direction}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTexts,setVisibleTexts] = useState<string[]>([texts[0]])
  const [counter, setCounter] = useState(0);  
  const {isMobile} = useIsMobile();
  const TimeInterval = animationType=="slide" ? interval +2:  interval 
  useEffect(()=>{
    setVisibleTexts([])
          for(var i = 0 ; i<=currentIndex ; i++){
            setVisibleTexts(visibleTexts.concat(texts[i]))
          }
  },[currentIndex,texts,animationType,interval,direction,texts.length])

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (counter < TimeInterval) {
        setCounter(counter + 1);
      }
      
    }, 1000);
    if(currentIndex>texts.length-1){
        setCurrentIndex(0)
      }
    return () => clearInterval(intervalTime);
  }, [counter,texts.length,TimeInterval,currentIndex,texts,animationType]);

  useEffect(()=>{
    setVisibleTexts([])
    setCurrentIndex(0)
    setCounter(0)
  },[texts.length,TimeInterval,animationType])

  useEffect(() => {
      if (counter >= TimeInterval) {
        setCounter(0);
        if (currentIndex == texts.length - 1) {
          setVisibleTexts([])
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1);

        }
      }
      if(currentIndex>texts.length-1){
        setCurrentIndex(0)
        setCounter(0)
        
      }
    }, [counter,texts.length,TimeInterval,currentIndex,texts,animationType]);

    return (
      animationType == "stack" ? 
      visibleTexts.length > 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          {visibleTexts.length > 0 &&
            currentIndex < texts.length &&
            texts && texts.map((text: string, index: number) => (
              <Box
                key={index}
                style={{
                  alignItems: 'center',
                  height: visibleTexts.includes(text) ? 'fit-content' : '0px',
                  display: 'flex',
                  columnGap: '0.5vw',
                  flexDirection: 'row',
                  opacity: visibleTexts.includes(text) ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                }}
              >
                {text && visibleTexts.includes(text) && <img src={checkGold.src} style={{ width: '1rem' }} />}
                {visibleTexts.includes(text) && (
                  <p style={{ fontWeight: isMobile ? "200" : '400', fontSize: isMobile ? '0.8rem' : '1rem', lineHeight: '1.7857142857' }}>{text}</p>
                )}
              </Box>
            ))}
        </Box>
      ):<></> 
      : animationType == "slide" ? 
      texts.length > 0 ? (
        <Box style={{height:"fit-content",position:'relative',width:'100%'}}>
                  {texts.length > 0 &&
            currentIndex < texts.length && texts.map((text: string, index: number) => (
              <Box
                key={index}
                style={{
                  alignItems: 'center',
                  height: visibleTexts.includes(text) ? 'fit-content' : '0px',
                  display: 'flex',
                  columnGap: '0.5vw',
                  flexDirection: 'row',
                  justifyContent:'center',
                  position:'absolute',
                  left:"0%",
                  width:'100%',
                  transform : texts[currentIndex]===text || currentIndex<index  ? 'translate(0px,0px)':' translate(120px,0px)',
                  opacity:  texts[currentIndex]===text ? 1 :0,
                  transition: 'opacity 0.5s ease-in-out, transform 1s ease-in-out',
                }}
              >
                {/* {text && visibleTexts.includes(text) && <img src={checkGold.src} style={{ width: '1rem'}} />} */}
                {visibleTexts.includes(text) && (
                  <p style={{ fontWeight: isMobile ? "200" : '400', fontSize: isMobile ? '0.8rem' : '1rem', lineHeight: '1.7857142857',textAlign:direction=="row"||direction=="row-reverse"?'left':'center',width:'100%' }}><img src={checkGold.src} style={{ width: '1rem',marginRight:'0.3rem',transform:'translate(0rem,0.1rem'}} />{text}</p>
                )}
              </Box>
            ))}
        </Box>
      ):<></>:<Box style={{height:"fit-content",position:'relative'}}>
      { texts.map((text: string, index: number) => (
  <Box
    key={index}
    style={{
      alignItems: 'center',
      height: 'fit-content' ,
      display: 'flex',
      columnGap: '0.5vw',
      flexDirection: 'row',
      
    }}
  >
     {/* <img src={checkGold.src} style={{ width: '1rem'}} /> */}
      <p style={{ fontWeight: isMobile ? "200" : '400', fontSize: isMobile ? '0.8rem' : '1rem', lineHeight: '1.7857142857' ,textAlign:direction=="row"?'left':'center',width:'100%' }}>{text}</p>
    
  </Box>
))}
</Box>
    );
    
    
};
export default AnimatedTexts
