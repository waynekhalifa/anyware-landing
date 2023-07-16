import { Box, Grid, Typography } from "@mui/material";

import OneColumn from "../UI/OneColumn";
import LightBox from "../UI/LightBox";
import ContactUsForm from "../UI/Forms/ContactUsForm";

const ContactUs: React.FC = () => {
  return (
    // <OneColumn background="white">

        <Box style={{backgroundColor:'white',width:'80%',height:'80%',justifyContent:'center',marginTop:'5%'}}>

          <ContactUsForm />
        </Box>

    // </OneColumn>
  );
};

export default ContactUs;
