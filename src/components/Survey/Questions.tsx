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
interface MyProps{
  fullName:string,
  mobile:string,
  email:string,
  handleSelectedImage:(image:any)=>void,
  handleSelectedColor:(color:any)=>void
  handleSelectedFeature:(color:any)=>void
  handleSelectedMonth:(color:any)=>void
  handleTotalPrice:(color:any)=>void
  handleSubmit:()=>Promise<void>
}

const initialState: StateProps = { activeQuestion: 1 };

const Questions: React.FC<MyProps> = ({fullName,email,mobile,handleSelectedColor,handleSelectedImage,handleSelectedFeature,handleSelectedMonth,handleTotalPrice,handleSubmit}) => {
  const [state, setState] = useState(initialState);
  const { questionsListing } = useQuestion("questions", "question");
  const { activeQuestion } = state;
  console.log(fullName)
  const handleNextClick=async (id:number)=>{
    if(id==4){
      await handleSubmit()
    }
    var nextBox=document.getElementById("question"+(state.activeQuestion + 1))
    setState((state) => ({
      ...state,
      activeQuestion: state.activeQuestion + 1,
    }))
    nextBox?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Box>
      {questionsListing.map((question: any,i:number) => (
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
          
          <Grid style={{marginLeft:"0.5vw"}} id={"question"+question.id} item xs={12} md={10}>
            <Typography variant="h4" paragraph style={{fontSize:"1.7rem"}}>
              {i!=0? question.title:"Welcome "+fullName+" !"}
            </Typography>
            <HtmlContent content={question.content} />
            {question.hasDropZone && <DropZone  handleSelectedImage={handleSelectedImage} handleSelectedColor={handleSelectedColor} />}
            {question.hasFeatures && (
              <Features
                isActive={question.id === activeQuestion}
                completed={question.id + 1 === activeQuestion}
                handleSelectedFeature={handleSelectedFeature}
                handleTotalPrice={handleTotalPrice}
                handleSelectedMonth={handleSelectedMonth}
              />
            )}
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "4px",
                height: 48,
                mt: 4,
                fontSize:"0.86rem"
              }}
              onClick={()=>
                handleNextClick(question.id)
              }
            >
              {question.buttonText}
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Questions;
