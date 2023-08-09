import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import useConfirm from "@/hooks/useConfirm";
import useFormValidations from "@/hooks/useFormValidations";
import ButtonLoader from "../ButtonLoader";
import LightBox from "../LightBox";

const ContactForm: React.FC = () => {
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
      // await fetch("https://asten-mail-server.herokuapp.com/api/send-mail", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: data.email,
      //     cc: "info@astencollege.com",
      //     subject: `Asten Contact Form, Message from ${data.firstName} ${data.lastName}`,
      //     message: data.message,
      //     html: "",
      //   }),
      // });
      
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
    <LightBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("firstName")}
              type="text"
              placeholder={"First name"}
              fullWidth
              id="firstName"
              size="small"
              error={!!errors.firstName}
            />
            {errors.firstName && (
              <Typography color="error">
                <>{errors.firstName.message}</>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("lastName")}
              type={"text"}
              placeholder={"Last Name"}
              fullWidth
              id={"lastName"}
              size="small"
              error={!!errors.lastName}
            />
            {errors.lastName && (
              <Typography color="error">
                <>{errors.lastName.message}</>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("email")}
              type={"text"}
              placeholder={"Email"}
              fullWidth
              id={"email"}
              size="small"
              error={!!errors.email}
            />
            {errors.email && (
              <Typography color="error">
                <>{errors.email.message}</>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("message")}
              type={"text"}
              placeholder={"Message"}
              fullWidth
              id={"message"}
              size="small"
              multiline
              rows={10}
              error={!!errors.message}
            />
            {errors.message && (
              <Typography color="error">
                <>{errors.message.message}</>
              </Typography>
            )}
          </Grid>
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
                severity={"success"}
                sx={{ width: "100%" }}
              >
                {confirm}
              </Alert>
            )}
          </Grid>
        </Grid>
      </form>
    </LightBox>
  );
};

export default ContactForm;
