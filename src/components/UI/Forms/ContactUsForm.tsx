import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import useConfirm from "@/hooks/useConfirm";
import useFormValidations from "@/hooks/useFormValidations";
import ButtonLoader from "../ButtonLoader";
import LightBox from "../LightBox";
import useIsMobile from "@/hooks/useIsMobile";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import useApp from "@/hooks/useApp";
import axios from "axios";

const ContactUsForm = ({partner,data}:any) => {
  const { confirm, changeConfirm } = useConfirm();
  const { isMobile } = useIsMobile();
  const { closeModal } = useApp();

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleFormScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    // event.preventDefault();
  };
  const { getValidationSchema } = useFormValidations("contact-us");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<any>({ resolver: yupResolver(getValidationSchema()) });

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    console.log(formData)
    try {
      const apiUrl = 'https://www.landingadmin.anyware.software/wp-json/custom/v1/send-email';
      
    const data2 = {
      action: 'send_custom_email',
      subject : partner ? "Become Partner Form Submission" + " for " + program : "Contact Us Form Submission",
      name:formData.fullName,
      email:formData.email,
      restaurant : formData.restaurant,
      message:  formData.message,
      mobile : formData.mobile
    };

    await axios.post(apiUrl, data2)
      .then(response => {
        console.log(response.data); // Email status response from the server

        // Handle success or error based on the response
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
      //  await fetch("https://asten-mail-server.herokuapp.com/api/send-mail", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: data.email,
      //     cc: "hazem.alhegazy@gmail.com",
      //     subject: `anyware Contact Form, Message from ${data.fullName} ${data.mobile}`,
      //     message: data.message,
      //     html: "",
      //   }),
      // });
      reset();
      changeConfirm("Your message has been sent!");
  

      setTimeout(() => {
        closeModal()
        changeConfirm("");
      }, 3000);
    } catch (err: Error | any) {
      console.log(`${err}`);
    }
  };
  const email = data&&data.length>0 ? data.split("$$")[0]: ""
  const program = data&&data.length>0 ? data.split("$$")[1]: ""
  return (
    <Box style={{ margin: "auto", maxWidth: isMobile ? "90%" : "400px", marginTop: "20px" }}
    onWheel={handleFormScroll}
    onClick={handleFormClick}
    >
      <Box style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Typography style={{ fontSize: 25, fontWeight: "bold", flex: 1, textAlign: "center" }}>
          Contact Us
        </Typography>
        <IconButton
          color="primary"
          aria-label="close"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={closeModal}
          sx={{
            transform: isHovered ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography>
            Full Name
            <span style={{ color: 'red' }}> *</span>
          </Typography>
            <TextField
              {...register("fullName")}
              type="text"
              placeholder="Full Name"
              fullWidth
              id="fullName"
              size="small"
              error={!!errors.fullName}
              required
            />
            {errors.fullname && (
              <Typography color="error">
                <>{errors.fullname.message}</>
              </Typography>
            )}
          </Grid>

         {!partner && <Grid item xs={12}>
          <Typography>Restaurant / Hotel Name</Typography>
            <TextField
              {...register("restaurant")}
              type="text"
              placeholder="Restaurant/Hotel Name"
              fullWidth
              id="restaurant"
              size="small"
              error={!!errors.restaurant}
            />
            {errors.restaurant && (
              <Typography color="error">
                <>{errors.restaurant.message}</>
              </Typography>
            )}
          </Grid>}

          <Grid item xs={12}>
          <Typography>Email <span style={{ color: 'red' }}> *</span></Typography>

            <TextField
              {...register("email")}
              type="text"
              placeholder="Email"
              fullWidth
              id="email"
              size="small"
              error={!!errors.email}
              required
              defaultValue={email}
            />
            {errors.email && (
              <Typography color="error">
                <>{errors.email.message}</>
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
          <Typography>Mobile <span style={{ color: 'red' }}> *</span></Typography>
            <TextField
              {...register("mobile")}
              type="text"
              placeholder="Mobile Number"
              fullWidth
              id="mobile"
              size="small"
            error={!!errors.mobile}
              required
            />
            {errors.mobile && (
              <Typography color="error">
                <>{errors.mobile.message}</>
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
          <Typography>Message</Typography>
            <TextField
              {...register("message")}
              type="text"
              placeholder="Message"
              fullWidth
              id="message"
              size="small"
              error={!!errors.message}
              required
              multiline
            />
            {errors.message && (
              <Typography color="error">
                <>{errors.message.message}</>
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sx={{mb:5}}>
            <Button
              fullWidth
              disableElevation
              variant="contained"
              type="submit"
              sx={{ mb: confirm!.length > 0 ? 2 : 0 , mt:partner ? 2:0}}
              startIcon={isSubmitting && <ButtonLoader />}
              // disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}
            >
              <Typography sx={{fontSize:18,fontWeight:'bold'}}>
              Submit
              </Typography>
            </Button>
            {confirm!.length > 0 && (
              <Alert
                onClose={() => changeConfirm("")}
                elevation={0}
                variant="filled"
                severity="success"
                sx={{ width: "100%" }}
              >
                {confirm}
              </Alert>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactUsForm;
