import { Box, Button,Container } from "@mui/material";
import { useRouter } from 'next/router';
import { useState } from "react";
import axios from "axios"
import { features } from "process";
import Header from "../Header/Header";
const TRS: React.FC = () => {
  
  return (
    <>
    <Header />
       <Container style={{alignItems:'center',justifyContent:'center',display:'flex',width:'100%',height:'100vh'}}>
        <h1 style={{color:'#000'}}>hi</h1>
      </Container>
    </>
  );
};

export default TRS;
