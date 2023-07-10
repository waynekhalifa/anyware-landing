import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextImage from 'next/image'

interface Props {
  images: any;
  interval: number;
}
const FadingImages: React.FC<Props> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(interval);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
      
    }, 1000);
    if(currentIndex>images.length-1){
      setCurrentIndex(0)
    }
    return () => clearInterval(intervalTime);
  }, [timeRemaining]);
  useEffect(()=>{
    setCurrentIndex(0)
    setTimeRemaining(interval)
  },[images.length])
  useEffect(() => {
      if (timeRemaining <= 0) {
        setTimeRemaining(interval);
        if (currentIndex == images.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
      if(currentIndex>images.length-1){
        setCurrentIndex(0)
      }
    }, [timeRemaining,images.length,interval,currentIndex,interval,images]);
  return (
     currentIndex<=images.length-1) && images.map((item: any , index: number) => (
      <NextImage 
      key={index}
      src={item.src}
      placeholder="blur"
      blurDataURL={item.blurDataURL}
      priority
      layout="fill"
      width={images[currentIndex].src === item.src ? "100%" : "0%" }
      height= {images[currentIndex].src === item.src ? "100%" : "0%"}
      objectFit="contain"
      sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
      style={{  width: images[currentIndex].src === item.src ? "100%" : "0%" , height:  images[currentIndex].src === item.src ? "100%" : "0%",transition:"opacity 1s ease-in-out", opacity:images[currentIndex].src === item.src ? 1:0 }}
      />
    ))
};

export default FadingImages;
