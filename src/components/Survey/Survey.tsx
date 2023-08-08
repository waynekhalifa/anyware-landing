import { Box, Button } from "@mui/material";

import Questions from "./Questions";
import { useRouter } from 'next/router';
import { useState } from "react";
import axios from "axios"
import { features } from "process";
const Survey: React.FC = () => {
  const router=useRouter()
  const data=router.query
  
  const [selectedImage,setSelectedImage]=useState("")
  const [selectedColor,setSelectedColor]=useState("primary.main")
  const [selectedFeatures,setSelectedFeatures]=useState([])
  const [selectedMonth,setSelectedMonth]=useState(0)
  const [totalPrice,setTotalPrice]=useState(0)
  const handleSelectedImage=(image:any)=>{
    setSelectedImage(image)
  }
  const handleSelectedColor=(color:any)=>{
    setSelectedColor(color)
    
  }
  const handleSelectedFeature=(feature:any)=>{
    let features2:any[]=[]
    feature.forEach((element:any)=>features2.push(element))
    setSelectedFeatures(features2 as any)
  }
  const handleSelectedMonth=(month:any)=>{
    setSelectedMonth(month)
  }
  const handleTotalPrice=(price:any)=>{
    setTotalPrice(price)
  }
  const handleSubmit=async ()=>{
    // const formData = new FormData();
    // formData.append('image', selectedImage);
    // formData.append('color', selectedColor); // Replace with your actual additional data
    // formData.append('month', selectedMonth+"");
    // formData.append('price', totalPrice+"");
    // formData.append('month', selectedMonth+"");
    // formData.append('features',JSON.stringify(selectedFeatures))
    
    // formData.append('mobile', data.mobile+"");
    
 // Assuming this code is inside an async function
try {
  const response = await axios.post("https://www.landingadmin.anyware.software/wp-json/custom/v1/addUserProduct", {
    image: selectedImage,
    color: selectedColor,
    month: selectedMonth,
    price: totalPrice,
    features: selectedFeatures,
    userID: data.mobile,
  }, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // If the request is successful, the response will be available here
  console.log(response.data); // This will log the response data
  // You can also perform any other actions with the response data as needed

} catch (error) {
  // If the request encounters an error, it will be caught here
  console.error(error); // This will log the error details

  // You can display an error message to the user or perform any other error handling
}

  }
  // console.log(selectedImage)
  // console.log(selectedColor)
  // console.log(selectedFeatures)
  // console.log(selectedMonth)
  // console.log(totalPrice)
  return (
    <>
      <Box sx={{ height: 400,display:"flex",flexDirection:"column" }} />
      <Questions handleSubmit={handleSubmit} handleTotalPrice={handleTotalPrice} handleSelectedMonth={handleSelectedMonth} handleSelectedImage={handleSelectedImage} handleSelectedColor={handleSelectedColor} handleSelectedFeature={handleSelectedFeature} fullName={data.fullName as string} mobile={data.mobile as string} email={data.email as string} />
      <Box
        sx={{
          backgroundColor: "primary.light",
          transition: "all .2s cubic-bezier(.785,.135,.15,.86) 0s",
          width: "20%",
          height: "100%",
          position: "fixed",
          right: "0",
          top: "0",
        }}
      >
        <Box sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "30px",
              height: "30px",
              borderRadius: "30px",
              top: "30px",
              right: "60px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "250px",
              height: "250px",
              borderRadius: "250px",
              top: "60px",
              left: "-125px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "25px",
              height: "25px",
              borderRadius: "25px",
              top: "350px",
              left: "30px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "15px",
              height: "15px",
              borderRadius: "15px",
              bottom: "350px",
              right: "40px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "130px",
              height: "130px",
              borderRadius: "130px",
              bottom: "150px",
              right: "-65px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Survey;
