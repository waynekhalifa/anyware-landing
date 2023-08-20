import { Box, Grid, Typography } from "@mui/material";

import OneColumn from "../UI/OneColumn";
import LightBox from "../UI/LightBox";
import ContactUsForm from "../UI/Forms/ContactUsForm";
import useIsMobile from "@/hooks/useIsMobile";

const ContactUs = ({partner,data}:any) => {
  const { isMobile} = useIsMobile();
  return (
    // <OneColumn background="white">

        <Box style={{backgroundColor:'white',display:'flex',width:isMobile?'90%':'35%',height:isMobile?'70%':'80%',justifyContent:'center',marginTop:isMobile?'30%':'5%',borderRadius:10,overflowY:'auto'}}>

          <ContactUsForm partner={partner} data={data}/>
        </Box>

    // </OneColumn>
  );
};

export default ContactUs;
