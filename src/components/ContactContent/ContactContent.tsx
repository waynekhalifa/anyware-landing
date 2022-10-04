import { Box, Grid, Typography } from "@mui/material";

import OneColumn from "../UI/OneColumn";
import { ContactForm } from "../UI/Forms";
import LightBox from "../UI/LightBox";

const ContactContent: React.FC = () => {
  return (
    <OneColumn>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={4}>
          <LightBox>
            <Typography paragraph>
              <strong>Phone number:</strong> 010-3333-4460
            </Typography>
            <Typography gutterBottom>
              <strong>Email:</strong>
            </Typography>
            <Typography gutterBottom>hr@astencollege.com</Typography>
            <Typography paragraph>info@astencollege.com</Typography>
            <Typography gutterBottom>
              <strong>Address:</strong>
            </Typography>
            <Typography gutterBottom>
              Taj Sultan, Block 3, Building 21, Flat 13, Nasr City, Cairo, Egypt
            </Typography>
            <Typography gutterBottom>
              Building 77, El Teseen Street, Fifth Settlement, New Cairo, Egypt
            </Typography>
          </LightBox>
        </Grid>
      </Grid>
      <Box
        sx={{ mt: 5 }}
        component={"iframe"}
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.195561827455!2d31.40609735125813!3d30.0599283817878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d7abbc62769%3A0x8301581d015a598!2sCompound%20Taj%20Sultan!5e0!3m2!1sen!2seg!4v1664107847102!5m2!1sen!2seg"
        }
        width={"100%"}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </OneColumn>
  );
};

export default ContactContent;
