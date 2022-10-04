import * as Yup from "yup";

const useFormValidations = (slug: string) => {
  const messageFormValidation = () =>
    Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      message: Yup.string().required("Message is required"),
    });

  const getValidationSchema = () => {
    switch (slug) {
      case "contact-us":
        return messageFormValidation();
      default:
        return Yup.object();
    }
  };

  return {
    getValidationSchema,
  };
};

export default useFormValidations;
