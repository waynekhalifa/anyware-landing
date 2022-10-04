import { SubmitHandler, useForm } from "react-hook-form";

import Box from "@mui/material/Box";

import { Button, TextField } from "@mui/material";
import { commonWhite } from "../../constants/colors";

const NewsletterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", mb: 2, width: "100%" }}
      >
        <TextField
          fullWidth
          size="small"
          {...register("email")}
          placeholder="Enter your email"
          color="secondary"
          sx={{
            background: (theme) => commonWhite(theme),
            ".MuiInputBase-root": {
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            },
          }}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{
            textTransform: "capitalize",
            color: (theme) => commonWhite(theme),
            minWidth: 120,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default NewsletterForm;
