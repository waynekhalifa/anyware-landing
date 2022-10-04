import { FC } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box, Grid, Typography } from "@mui/material";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  autoFocus: boolean;
  defaultValue: any;
  register: any;
  setValue: any;
  errors: any;
  options?: any;
}

const FormFields: FC<Props> = ({
  name,
  label,
  placeholder,
  type,
  autoFocus,
  defaultValue,
  register,
  setValue,
  errors,
  options,
}) => {
  const renderField = () => {
    switch (type) {
      case "textField":
        return (
          <TextField
            fullWidth
            size="small"
            placeholder={placeholder}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
          />
        );
      case "textArea":
        return (
          <TextField
            fullWidth
            size="small"
            placeholder={placeholder}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
            multiline
            rows={4}
          />
        );
      case "password":
        return (
          <TextField
            fullWidth
            size="small"
            type="password"
            placeholder={placeholder}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
          />
        );
      case "number":
        return (
          <TextField
            fullWidth
            size="small"
            type="number"
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
          />
        );
      case "select":
        return options ? (
          <TextField
            select
            fullWidth
            size="small"
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            placeholder={placeholder}
            {...register(name)}
            error={errors[name] ? true : false}
          >
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ) : null;
      case "wrapper":
        return options ? (
          <Grid container columnSpacing={2}>
            {options.map((option: any) => (
              <Grid key={option.name} item xs={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  autoFocus={option.autoFocus}
                  defaultValue={option.defaultValue}
                  {...register(option.name)}
                  error={errors[option.name] ? true : false}
                >
                  {option.options.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            ))}
          </Grid>
        ) : null;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      {type !== "checkboxes" && type !== "image" && (
        <Typography
          component={"label"}
          htmlFor={name}
          sx={{ mb: "4px", display: "inline-block", color: "text.secondary" }}
        >
          {label}
        </Typography>
      )}
      {renderField()}
      <Typography color="error" sx={{ fontSize: 14 }}>
        {errors[name]?.message}
      </Typography>
    </Box>
  );
};

export default FormFields;
