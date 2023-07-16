import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { features } from "process";
import Header from "../Header/Header";
import { Items } from "./TRSconstants";
import TRScard from "./TRScard";
import Section from "../UI/Section/Section";
const TRS: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          width: "100%",
          height: "100vh",
          overflowX: "hidden",
          overflowY:"scroll",
          position: "relative",
          padding: "1rem",
          paddingTop:"8rem"
        }}
      >
      
      
        {Items.map((item, index) => (
          <Box key={index} style={{ width: "100%",minHeight:'50%', maxHeight:'100%' }}>
            <TRScard index={index} items={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TRS;
