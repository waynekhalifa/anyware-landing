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
  const { isMobile } = useIsMobile();
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
      }, 5000); // Change slide every 3 seconds
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
    <Grid container>
      <Grid item xs={12} md={6}>
        <BannerForm bannerData={bannerData1} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ span: { display: "block !important" }, transform: isMobile ? "scale(0.7)" : "scale(1)", marginTop: isMobile ? '20%' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
      >
        <Video key={videoKey} SlidePage={1} />
      </Grid>
    </Grid>,
    <Grid container>
      <Grid item xs={12} md={6}>
        <BannerForm bannerData={bannerData2} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ span: { display: "block !important" }, transform: isMobile ? "scale(0.7)" : "scale(1)", marginTop: isMobile ? '20%' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
      >
        <Video key={videoKey} SlidePage={2} />
      </Grid>
    </Grid>,
    <Grid container>
      <Grid item xs={12} md={6}>
        <BannerForm bannerData={bannerData3} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ span: { display: "block !important" }, transform: isMobile ? "scale(0.7)" : "scale(1)", marginTop: isMobile ? '20%' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
      >
        <Video key={videoKey} SlidePage={3} />
      </Grid>
    </Grid>,
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        {slides[currentSlide]}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          span: { display: 'block !important' },
          transform: 'scale(1)',
          marginTop: 7,
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
