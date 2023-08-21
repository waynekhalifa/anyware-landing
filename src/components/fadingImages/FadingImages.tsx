import React, { useEffect, useState } from "react";
import NextImage from 'next/image'

interface Props {
  images: any;
  interval: number;
  selectedTap? : number;
}
const FadingImages: React.FC<Props> = ({ images, interval,selectedTap}) => {
  const [currentIndex,setCurrentIndex]=useState(0)
  
  useEffect(() => {
    
    const interval2 = setInterval(() => {
      setCurrentIndex((prevIndex:any) => (prevIndex + 1) % images.length);
    }, 1000 * interval); // Change image every 3 seconds
    
    return () => {
      clearInterval(interval2);
    
    };
  }, [images]);
  
    useEffect(()=>{
      setCurrentIndex(0)
    },[images,images.length, selectedTap])
    
  return (
     currentIndex<=images.length-1 && images.map((item: any , index: number) => (
      
<div key={index} style={{ width: "100%", height: "100%"}}>
  <NextImage 
    
    src={item.src}
    placeholder="blur"
    blurDataURL={item.blurDataURL}
    priority 
    loading="eager"	
    layout="fill"
    objectFit="contain"
    sizes="(max-width: 768px) 100vw"      
    style={{  
      width: images[currentIndex].src === item.src ? "100%" : "0%", 
      height: images[currentIndex].src === item.src ? "100%" : "0%",
      transition: "opacity 1s ease-in-out", 
      opacity: images[currentIndex].src === item.src ? 1 : 0 ,
      
    }}
  />
</div>

    )) )
};

export default FadingImages;
