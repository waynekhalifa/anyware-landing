import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../Logo";

import logo from "@images/anywarelogo.png";
import useFormFields from "@/hooks/useFormFields";
import useFormValidations from "@/hooks/useFormValidations";
import FormFields from "../UI/FormFields";
import CustomLoader from "../UI/CustomLoader";
import { useRouter } from "next/router";
import axios from "axios"
const Login: React.FC = () => {

  
  const { push } = useRouter();
  const router=useRouter()
  const email = router.query.email;
  const { getFormFields } = useFormFields();
  const { getValidationSchema } = useFormValidations("test");
  function isValidEmail(email:any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<any>({ resolver: yupResolver(getValidationSchema()) });

  const onSubmit: SubmitHandler<any> = async (data: any) => {

 
    const data2 = {mobile:data.mobile,fullName:data.name,restaurantName:data.restaurant,email:data.email,referalCode:data.code}
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://localhost/php/addSiteUser.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data2
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
    
   

    push(`/survey?mobile=${data.mobile}&email=${data.email}&fullName=${data.name}`);
  };

  return (
    <>
  <AppBar position="relative" elevation={0} color="transparent" sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 } }}>
    <Toolbar>
      <Logo imgSrc={logo} />
      <Box sx={{ flex: 1 }} />
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ display: { xs: "none", md: "block" } }}>Already Registered With Us?</Typography>
        <Button variant="contained" size="large" sx={{ textTransform: "capitalize", boxShadow: 12, ml: { xs: 0, md: 3 } }}>
          Login
        </Button>
      </Box> */}
    </Toolbar>
  </AppBar>
  
  <Box sx={{ marginTop:"0.5vh", position: "absolute", top: "52.5%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: "480px",
          background: "#fff",
          boxShadow: "0 24px 64px #26214a1a",
          borderRadius: "12px",
          padding: { xs: "20px", md: "30px 60px" },
          position: "relative",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          fontWeight={700}
          textAlign="center"
          paragraph
        >
          {`Let's go!`}
        </Typography>
        {getFormFields("information").map((field: any) => (
          <FormFields
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            autoFocus={field.autoFocus}
            defaultValue={(field.name === "email" && isValidEmail(email)) || (field.name==="mobile" && !isValidEmail(email)) ?email:  field.defaultValue }
            options={field.options}
            register={register}
            setValue={setValue}
            errors={errors}
            required={true}
          />
        ))}
        <Button
          fullWidth
          disableElevation
          variant="contained"
          size="large"
          type="submit"
          sx={{
            textTransform: "none",
            boxShadow: 12,
            "&:hover": { boxShadow: 12 },
            position: "relative",
            height: 56,
            mb: { xs: 2, md: 3 },
          }}
        >
          {isSubmitting ? <CustomLoader /> : "Let's Start"}
        </Button>
      </Box>
    </Container>
  </Box>
</>

  );
};

export default Login;
