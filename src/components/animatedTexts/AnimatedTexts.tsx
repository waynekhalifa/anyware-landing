import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import checkGold from "@images/checkGold.png";
import useIsMobile from "@/hooks/useIsMobile";

interface Props {
  texts: string[];
  interval: number;
  animationType: string;
  direction: string;
  selectedTap?: number;
}
const AnimatedTexts: React.FC<Props> = ({
  texts,
  interval,
  animationType,
  direction,
  selectedTap,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTexts, setVisibleTexts] = useState<string[]>([texts[0]]);
  const [counter, setCounter] = useState(0);
  const { isMobile } = useIsMobile();
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentIndex((prevIndex: any) => (prevIndex + 1) % texts.length);
    }, 1000 * (animationType === "slide" ? interval + 2 : interval)); // Change image every 3 seconds

    return () => {
      clearInterval(interval2);
    };
  }, [texts, interval, animationType]);

  useEffect(() => {
    setVisibleTexts([]);
    setCurrentIndex(0);
  }, [selectedTap]);

  useEffect(() => {
    const newVisibleTexts = texts.slice(0, currentIndex + 1);
    setVisibleTexts(newVisibleTexts);
  }, [currentIndex, texts]);

  return animationType == "stack" ? (
    visibleTexts.length > 0 ? (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        {visibleTexts.length > 0 &&
          currentIndex < texts.length &&
          texts &&
          texts.map((text: string, index: number) => (
            <Box
              key={index}
              style={{
                alignItems: "center",
                height: visibleTexts.includes(text) ? "fit-content" : "0px",
                display: "flex",
                columnGap: "0.5vw",
                flexDirection: "row",
                opacity: visibleTexts.includes(text) ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              
              {visibleTexts.includes(text) && (
                <p
                  style={{
                    fontWeight: isMobile ? "200" : "400",
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    lineHeight: "1.7857142857",
                  }}
                >
                  <NextImage
                    layout="fixed"
                    width={14}
                    height={14}
                    alt="gold check sign"
                    src={checkGold.src}
                  />{" "}
                  {text}
                </p>
              )}
            </Box>
          ))}
      </Box>
    ) : (
      <></>
    )
  ) : animationType == "slide" ? (
    texts.length > 0 ? (
      <Box
        style={{ height: "fit-content", position: "relative", width: "100%" }}
      >
        {texts.length > 0 &&
          currentIndex < texts.length &&
          texts.map((text: string, index: number) => (
            <Box
              key={index}
              style={{
                alignItems: "center",
                height: visibleTexts.includes(text) ? "fit-content" : "0px",
                display: "flex",
                columnGap: "0.5vw",
                flexDirection: "row",
                justifyContent: "center",
                position: "absolute",
                left: isMobile ? "10%" : "0%",
                width: isMobile ? "90%" : "100%",
                transform:
                  texts[currentIndex] === text || currentIndex < index
                    ? "translate(0px,0px)"
                    : " translate(120px,0px)",
                opacity: texts[currentIndex] === text ? 1 : 0,
                transition:
                  "opacity 0.5s ease-in-out, transform 1s ease-in-out",
              }}
            >
              {visibleTexts.includes(text) && (
                <p
                  style={{
                    fontWeight: isMobile ? "200" : "400",
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    lineHeight: "1.7857142857",
                    textAlign:
                      direction == "row" || direction == "row-reverse"
                        ? "left"
                        : "center",
                    width: "100%",
                  }}
                >
                  <NextImage
                    layout="fixed"
                    width={14}
                    height={14}
                    src={checkGold.src}
                  />{" "}
                  {text}
                </p>
              )}
            </Box>
          ))}
      </Box>
    ) : (
      <></>
    )
  ) : (
    <Box style={{ height: "fit-content", position: "relative" }}>
      {texts.map((text: string, index: number) => (
        <Box

          key={index}
          style={{
            
            alignItems: "center",
            height: "fit-content",
            display: "flex",
            columnGap: "0.5vw",
            flexDirection: "row",
          }}
        >
          
          <p
            style={{
              fontWeight: isMobile ? "200" : "400",
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.7857142857",
              textAlign: direction == "row" ? "left" : "center",
              width: "100%",
            }}
          >
            {text}
          </p>
        </Box>
      ))}
    </Box>
  );
};
export default AnimatedTexts;
