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

const Login: React.FC = () => {
  const { push } = useRouter();
  const { getFormFields } = useFormFields();
  const { getValidationSchema } = useFormValidations("test");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<any>({ resolver: yupResolver(getValidationSchema()) });

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data);

    push("/survey");
  };

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        color="transparent"
        sx={{ pt: 3, pb: 3 }}
      >
        <Toolbar>
          <Logo imgSrc={logo} />
          <Box sx={{ flex: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Already playing with ClickUp?</Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "capitalize", boxShadow: 12, ml: 3 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: "480px",
              background: "#fff",
              boxShadow: "0 24px 64px #26214a1a",
              borderRadius: "12px",
              padding: "30px 60px",
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
              Let's go!
            </Typography>
            {getFormFields("information").map((field: any) => (
              <FormFields
                key={field.name}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
                autoFocus={field.autoFocus}
                defaultValue={field.defaultValue}
                options={field.options}
                register={register}
                setValue={setValue}
                errors={errors}
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
                mb: 3,
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
