import * as Yup from "yup";

const useFormValidations = (slug: string) => {
  const messageFormValidation = () =>
    Yup.object().shape({
      fullName: Yup.string().required("Name is required"),
      // restaurant: Yup.string().required("Resturant Name is required"),
      name:Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
        mobile: Yup.string().required("mobile is required"),
      // message: Yup.string().required("Message is required"),
    });
  const LoginFormValidation = () =>
    Yup.object().shape({
      name:Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
        mobile: Yup.string().required("mobile is required"),
    });

  const getValidationSchema = () => {
    switch (slug) {
      case "contact-us":
        return messageFormValidation();
        case "test":
          return LoginFormValidation();
      default:
        return Yup.object();
    }
  };

  return {
    getValidationSchema,
  };
};

export default useFormValidations;
