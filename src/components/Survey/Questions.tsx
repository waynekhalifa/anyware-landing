import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import logo from "@images/anywarelogo.webp";
import Logo from "../Logo";
import useQuestion from "@/hooks/useQuestion";
import HtmlContent from "../UI/HtmlContent";
import { useEffect, useState } from "react";
import DropZone from "./DropZone";
import Features from "./Features";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";
import CustomLoader from "../UI/CustomLoader/CustomerLoader";

interface StateProps {
  activeQuestion: number;
}
interface MyProps {
  fullName: string;
  mobile: string;
  email: string;
  state: StateProps;
  selectedFeatures: any[];
  setState: (state: any) => void;
  handleSelectedImage: (image: any) => void;
  handleSelectedColor: (color: any) => void;
  handleSelectedFeature: (color: any) => void;
  handleSelectedMonth: (color: any) => void;
  handleTotalPrice: (color: any) => void;
  handleSubmit: () => Promise<void>;
}

const Questions: React.FC<MyProps> = ({
  state,
  setState,
  fullName,
  email,
  mobile,
  selectedFeatures,
  handleSelectedColor,
  handleSelectedImage,
  handleSelectedFeature,
  handleSelectedMonth,
  handleTotalPrice,
  handleSubmit,
}) => {
  const { questionsListing } = useQuestion("questions", "question");
  const { activeQuestion } = state;
  const [disabled, setDisabled] = useState([2, 3, 4]);
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (!submitted) {
      const arr = [1, 2, 3, 4].filter((item) => item !== state.activeQuestion);
      setDisabled(arr);
    }
  }, [state]);
  const handleNextClick = async (id: number) => {
    if (id == 4) {
      setUpdating(true);
      await handleSubmit();
      setSubmitted(true);
      setUpdating(false);
      router.prefetch("/");
    }
    if (id == 5) {
     router.push('/')
    }
    if (id === 3 && selectedFeatures.length == 0) {
      setAlert(true);
    } else {
      var nextBox = document.getElementById(
        "question" + (state.activeQuestion + 1)
      );
      setState((state: any) => ({
        ...state,
        activeQuestion: state.activeQuestion + 1,
      }));
      const arr = [1, 2, 3, 4].filter(
        (item) => item !== state.activeQuestion + 1
      );
      setDisabled(arr);
      setTimeout(() => {
        nextBox?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <Box>
      {questionsListing.map((question: any, i: number) => (
        <>
          {i == 0 && (
            <Box
              sx={{ height: 200, display: "flex", flexDirection: "column" }}
            />
          )}
          <Grid
            container
            columnSpacing={4}
            key={question.id}
            sx={{ mb: 20, width: "65%", ml: "10%", position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: question.id === activeQuestion ? 0 : 1,
                backgroundColor:
                  question.id === activeQuestion
                    ? "transparent"
                    : "rgba(255,255,255,.7)",
              }}
            />
            <Grid item xs={12} md={2} sx={{ pt: 2 }}>
              <Logo imgSrc={logo} />
            </Grid>

            <Grid
              style={{ marginLeft: "0.5vw" }}
              id={"question" + question.id}
              item
              xs={12}
              md={10}
            >
              <Typography variant="h4" paragraph style={{ fontSize: "1.7rem" }}>
                {i != 0 ? question.title : "Welcome " + fullName + " !"}
              </Typography>
              <HtmlContent content={question.content} />
              {question.hasDropZone && (
                <DropZone
                  disabled={submitted}
                  handleSelectedImage={handleSelectedImage}
                  handleSelectedColor={handleSelectedColor}
                />
              )}
              {question.hasFeatures && (
                <Features
                  isActive={question.id === activeQuestion}
                  disabled={submitted}
                  completed={question.id + 1 === activeQuestion}
                  handleSelectedFeature={handleSelectedFeature}
                  handleTotalPrice={handleTotalPrice}
                  handleSelectedMonth={handleSelectedMonth}
                />
              )}
              {question.id === 5 ? (
                <a
                  href={
                    "https://calendly.com/digital-solutions-demo/product-tour?month=2023-08"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    disableElevation
                    variant="contained"
                    size="large"
                    sx={{
                      textTransform: "none",
                      borderRadius: "4px",
                      height: 48,
                      mt: 4,
                      fontSize: "0.86rem",
                    }}
                    onClick={() => handleNextClick(question.id)}
                    disabled={disabled.includes(question.id)}
                  >
                    {updating && question.id === 4 ? (
                      <CustomLoader />
                    ) : (
                      question.buttonText
                    )}
                  </Button>
                </a>
              ) : (
                <Button
                  disableElevation
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    borderRadius: "4px",
                    height: 48,
                    mt: 4,
                    fontSize: "0.86rem",
                  }}
                  onClick={() => handleNextClick(question.id)}
                  disabled={disabled.includes(question.id)}
                >
                  {updating && question.id === 4 ? (
                    <CustomLoader />
                  ) : (
                    question.buttonText
                  )}
                </Button>
              )}
              {question.id === 5 && (
                <Button
                  disableElevation
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    borderRadius: "4px",
                    height: 48,
                    mt: 4,
                    fontSize: "0.86rem",
                    marginLeft: 5,
                  }}
                  onClick={() => router.push("/")}
                >
                  {"return to home page"}
                </Button>
              )}
              {question.id === 3 && alert && (
                <Alert
                  sx={{ marginTop: 3 }}
                  severity="warning"
                  onClose={() => {
                    setAlert(false);
                  }}
                >
                  You need to choose at least one feature{" "}
                </Alert>
              )}
            </Grid>
          </Grid>
          {i == 0 && (
            <Box
              sx={{ height: 200, display: "flex", flexDirection: "column" }}
            />
          )}
        </>
      ))}
    </Box>
  );
};

export default Questions;
