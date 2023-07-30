import React, { useEffect, useState, useRef } from 'react';
import { Grid, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import BannerForm from '../Featured/BannerForm';
import Video from "./Video";
import useIsMobile from '@/hooks/useIsMobile';
import { bannerItems } from '@/constants/features';
import bannerform1 from "../../../public/images/bannerform1.png";

interface StateProps {
  videoKey: string;
}

const initialState: StateProps = {
  videoKey: new Date().toISOString(),
};

const HomeSlider = () => {
  const [state, setState] = useState(initialState);
  const { videoKey } = state;
  const { height , width, isMobile } = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideIntervalRef = useRef<number | null>(null);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoSlideTimer();
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlideTimer();
  };

  useEffect(() => {
    startAutoSlideTimer();
    return () => {
      stopAutoSlideTimer();
    };
  }, [currentSlide]);

  const startAutoSlideTimer = () => {
    if (!autoSlideIntervalRef.current) {
      autoSlideIntervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000); 
    }
  };

  const resetAutoSlideTimer = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
    startAutoSlideTimer();
  };

  const stopAutoSlideTimer = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
  };

  const bannerData1 = bannerItems[0]
  const bannerData2 = bannerItems[1]
  const bannerData3 = bannerItems[2]

  const slides = [
    <Grid key="0" onFocus={stopAutoSlideTimer}
     sx={{position:'absolute' ,visibility:currentSlide===0 ? 'block' : 'hidden',opacity:currentSlide===0 ? 1: 0, transition :'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',maxWidth:'85%',height:'100%'}} > 
    <Grid container   >
      <Grid item xs={12} md={6}  >
        <BannerForm bannerData={bannerData1} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ span: { display: "block !important" }, 
        transform: isMobile ? "scale(0.7)" : "scale(1)", 
        marginTop: isMobile ? '20%' : 0, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

       }}
      >
        <Video key={videoKey} SlidePage={1} />
      </Grid>
    </Grid></Grid>,
        <Grid key="1" onFocus={stopAutoSlideTimer}
        sx={{position:'absolute' ,visibility:currentSlide===1 ? 'block' : 'hidden',opacity:currentSlide===1 ? 1: 0, transition :'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',maxWidth:'85%',height:'100%'}} > 

    <Grid container key="1">
      <Grid item xs={12} md={6}>
        <BannerForm bannerData={bannerData2} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ span: { display: "block !important" }, transform: isMobile ? "scale(0.7)" : "translateX(3rem)", marginTop: isMobile ? '20%' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <Video key={videoKey} SlidePage={2} />
      </Grid>
    </Grid></Grid>,

    <Grid key="2" onFocus={stopAutoSlideTimer}
    sx={{position:'absolute' ,visibility:currentSlide===2 ? 'block' : 'hidden' , opacity:currentSlide===2 ? 1: 0, transition :'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',maxWidth:'85%',height:'100%'}} > 
    <Grid container key="2" >
      <Grid item xs={12} md={6}>
        <BannerForm bannerData={bannerData3} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ span: { display: "block !important" }, transform: isMobile ? "scale(0.7)" : "translateX(3rem)", marginTop: isMobile ? '20%' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Video key={videoKey} SlidePage={3} />
      </Grid>
    </Grid></Grid>,
  ];

  return (
    <Grid container>
      <Grid item xs={12} sx={{}}>
        {slides.map((item)=>{
          return(item)
        })}
        
      </Grid>
      {/* ========== space container========== */}
      <Grid item xs={12} md={6} style={{  minHeight:isMobile ? height*1.1:height*0.8,minWidth:'100%',display:'flex',zIndex:-9999}}></Grid>
      {/* ==================================== */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          
          span: { display: 'block !important' },
          transform: 'scale(1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-end',
          marginLeft: isMobile ? 0 : 5,
          
        }}
      >
        <IconButton onClick={handlePrevSlide}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={handleNextSlide} sx={{ marginLeft: 5 }}>
          <ChevronRight />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default HomeSlider;
