import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  content: React.ReactNode;
}

const WidgetItem: React.FC<Props> = ({ title, content }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography variant="h5" component="h3" paragraph>
        {title}
      </Typography>
      {content}
    </Box>
  );
};

export default WidgetItem;
