import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import useConfirm from "@/hooks/useConfirm";
import useFormValidations from "@/hooks/useFormValidations";
import ButtonLoader from "../ButtonLoader";
import LightBox from "../LightBox";

const ContactUsForm: React.FC = () => {
  const { confirm, changeConfirm } = useConfirm();
  const { getValidationSchema } = useFormValidations("contact-us");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<any>({ resolver: yupResolver(getValidationSchema()) });

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      reset();
      changeConfirm("Your message has been sent!");

      setTimeout(() => {
        changeConfirm("");
      }, 3000);
    } catch (err: Error | any) {
      console.log(`${err}`);
    }
  };
  return (
    <Box style={{marginRight:20,marginLeft:20,marginTop:20}}>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',marginBottom:20 }}>
        <Typography style={{ fontSize: 30, fontWeight: 'bolder'}}>
          Contact Sales
        </Typography>
      </Box>
      {/* <LightBox> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box style={{flex:1,marginLeft:10}}>
            <Typography style={{ marginRight: '50px',width:120 }}>Full Name</Typography>
            </Box>
            <Box style={{flex:2}}>
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
            </Box>
            {errors.fullName && (
              <Typography color="error">
                <>{errors.fullName.message}</>
              </Typography>
            )}
          </Box>
          </Grid>

          <Grid item xs={12} md={12}>
          <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box style={{flex:1,marginLeft:10}}>
            <Typography style={{ marginRight: '50px',width:"0%" }}>Restaurant/Hotel Name (Optional)</Typography>
            </Box>
            <Box style={{flex:2}}>
            <TextField
                {...register("restaurant")}
                type="text"
                placeholder="Restaurant/Hotel Name"
                fullWidth
                id="restaurant"
                size="small"
                error={!!errors.restaurant}
              />
            </Box>
            {errors.restaurant && (
              <Typography color="error">
                <>{errors.restaurant.message}</>
              </Typography>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={12}>
          <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box style={{flex:1,marginLeft:10}}>
            <Typography style={{ marginRight: '50px',width:120 }}>Email</Typography>
            </Box>
            <Box style={{flex:2}}>
            <TextField
                {...register("email")}
                type="text"
                placeholder="Email"
                fullWidth
                id="email"
                size="small"
                error={!!errors.email}
                required
              />
            </Box>
            {errors.email && (
              <Typography color="error">
                <>{errors.email.message}</>
              </Typography>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={12}>
          <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box style={{flex:1,marginLeft:10}}>
            <Typography style={{ marginRight: '50px',width:120 }}>Mobile Number</Typography>
            </Box>
            <Box style={{flex:2}}>
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
            </Box>
            {errors.mobile && (
              <Typography color="error">
                <>{errors.mobile.message}</>
              </Typography>
            )}
          </Box>
          </Grid>
          {/* <Grid item xs={12} md={12}>
            <Box display="flex" alignItems={'center'}>
              <Typography style={{ marginRight: '50px',width:120 }}>Full Name</Typography>
              <TextField
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                fullWidth
                id="fullName"
                size="small"
                error={!!errors.fullName}
              />
            </Box>
            {errors.fullName && (
              <Typography color="error">
                <>{errors.fullName.message}</>
              </Typography>
            )}
          </Grid> */}
          {/* <Grid item xs={12}>
            <Box display="flex" alignItems={'center'}>
              <Typography style={{ marginRight: '8px' }}>Restaurant/Hotel Name (Optional)</Typography>
              <TextField
                {...register("restaurant")}
                type="text"
                placeholder="Restaurant/Hotel Name"
                fullWidth
                id="restaurant"
                size="small"
                error={!!errors.restaurant}
              />
            </Box>
            {errors.restaurant && (
              <Typography color="error">
                <>{errors.restaurant.message}</>
              </Typography>
            )}
          </Grid> */}
          {/* <Grid item xs={12}>
            <Box display="flex" alignItems={'center'}>
              <Typography style={{ marginRight: '8px' }}>Message</Typography>
              <TextField
                {...register("message")}
                type="text"
                placeholder="Message"
                fullWidth
                id="message"
                size="small"
                multiline
                rows={4}
                error={!!errors.message}
              />
            </Box>
            {errors.message && (
              <Typography color="error">
                <>{errors.message.message}</>
              </Typography>
            )}
          </Grid> */}
          <Grid item xs={12}>
            <Button
              fullWidth
              disableElevation
              variant="contained"
              type="submit"
              sx={{ mb: confirm!.length > 0 ? 2 : 0 }}
              startIcon={isSubmitting && <ButtonLoader />}
              disabled={isSubmitting}
            >
              Submit
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
      {/* </LightBox> */}
    </Box>
  );
};

export default ContactUsForm;
