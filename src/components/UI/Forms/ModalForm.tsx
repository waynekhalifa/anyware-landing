import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Paper, Typography } from "@mui/material";
import ButtonLoader from "../ButtonLoader";
import FormFields from "../FormFields";
import useConfirm from "@/hooks/useConfirm";
import useFormValidations from "@/hooks/useFormValidations";
import useFormFields from "@/hooks/useFormFields";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/appSlice";

interface Props {
  title?: string;
}

const ModalForm: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const { getFormFields } = useFormFields();
  const { confirm, changeConfirm } = useConfirm();
  const { getValidationSchema } = useFormValidations("test");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    reset,
  } = useForm<any>({ resolver: yupResolver(getValidationSchema()) });

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      let htmlContent = ``;
      htmlContent = htmlContent + `<p>First Name: ${data.name}</p>`;
      htmlContent =
        htmlContent +
        `<p>Birth Date: ${data.day}/${data.month}/${data.year}</p>`;
      htmlContent =
        htmlContent + `<p>Year group (grade level): ${data.yearGroup}</p>`;
      htmlContent = htmlContent + `<p>gender: ${data.gender}</p>`;
      htmlContent = htmlContent + `<p>Enrolled In: ${data.enrolledIn}</p>`;
      htmlContent =
        htmlContent + `<p>Parent phone number: ${data.parentNumber}</p>`;
      htmlContent =
        htmlContent + `<p>How did you hear about us?: ${data.howYouHear}</p>`;

      await fetch("https://asten-mail-server.herokuapp.com/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "info@astencollege.com",
          subject: `Asten Admission Form`,
          message: "",
          html: htmlContent,
        }),
      });

      reset();
      changeConfirm("Your message has been sent!");

      setTimeout(() => {
        dispatch(closeModal({}));
      }, 3000);
    } catch (err: Error | any) {
      console.log(`${err}`);
    }
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 600,
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          p: 2,
        }}
      >
        <Typography align="center" variant="h5" fontWeight={500} paragraph>
          {title}
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {getFormFields("joinUs").map((field: any) => (
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
            color="primary"
            variant="contained"
            type="submit"
            sx={{ mb: confirm!.length > 0 ? 2 : 0 }}
            startIcon={isSubmitting && <ButtonLoader />}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ModalForm;
