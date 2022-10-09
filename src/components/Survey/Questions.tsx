import { Box, Button, Grid, Typography } from "@mui/material";
import logo from "@images/anywarelogo.png";
import Logo from "../Logo";
import useQuestion from "@/hooks/useQuestion";
import HtmlContent from "../UI/HtmlContent";
import { useState } from "react";
import DropZone from "./DropZone";
import Features from "./Features";

interface StateProps {
  activeQuestion: number;
}

const initialState: StateProps = { activeQuestion: 1 };

const Questions: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { questionsListing } = useQuestion("questions", "question");
  const { activeQuestion } = state;

  return (
    <>
      {questionsListing.map((question: any) => (
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
          <Grid item xs={12} md={10}>
            <Typography variant="h4" paragraph>
              {question.title}
            </Typography>
            <HtmlContent content={question.content} />
            {question.hasDropZone && <DropZone />}
            {question.hasFeatures && <Features />}
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "4px",
                height: 48,
                mt: 4,
              }}
              onClick={() =>
                setState((state) => ({
                  ...state,
                  activeQuestion: state.activeQuestion + 1,
                }))
              }
            >
              {question.buttonText}
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Questions;
