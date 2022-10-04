import { Box, Typography, useMediaQuery } from "@mui/material";
import { primaryMain } from "../../../constants/colors";

interface Props {
  text: string;
  maxWidth: string;
  disableDivider?: boolean;
  disableMargin?: boolean;
  align?: "left" | "center" | "right";
  component?: any;
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
}

const SectionTitle: React.FC<Props> = ({
  text,
  disableDivider,
  disableMargin,
  maxWidth,
  align,
  variant,
  component,
  color,
}) => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <>
      {!disableDivider && (
        <Box
          sx={{
            background: (theme) => primaryMain(theme),
            width: 64,
            height: 4,
            mb: 4,
          }}
        />
      )}
      <Typography
        variant={variant ? variant : matches ? "h4" : "h3"}
        component={component ? component : "h2"}
        fontWeight={700}
        align={align ? align : "left"}
        color={color ? color : "textPrimary"}
        sx={{ maxWidth, mb: disableMargin ? 0 : 4 }}
      >
        {text}
      </Typography>
    </>
  );
};

export default SectionTitle;
