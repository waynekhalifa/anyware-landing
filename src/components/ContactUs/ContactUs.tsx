import { Box, Grid, Typography } from "@mui/material";

import OneColumn from "../UI/OneColumn";
import LightBox from "../UI/LightBox";
import ContactUsForm from "../UI/Forms/ContactUsForm";
import useIsMobile from "@/hooks/useIsMobile";

const ContactUs: React.FC = () => {
  const { isMobile} = useIsMobile();
  return (
    // <OneColumn background="white">

        <Box style={{backgroundColor:'white',width:isMobile?'90%':'40%',height:isMobile?'70%':'80%',justifyContent:'center',marginTop:isMobile?'30%':'5%'}}>

          <ContactUsForm />
        </Box>

    // </OneColumn>
  );
};

export default ContactUs;
