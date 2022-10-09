import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Link from "../UI/Link";

interface Props {
  isSelected: boolean;
  feature: any;
  handleClick: any;
}

const FeatureCard: React.FC<Props> = ({ feature, isSelected, handleClick }) => {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "24px",
        boxShadow: 3,
        cursor: "pointer",
        border: "1px solid",
        borderColor: isSelected ? "primary.light" : "transparent",
      }}
      onClick={handleClick}
    >
      <Image src={feature.icon} alt={feature.title} width={43} height={43} />
      <Typography fontWeight={700} paragraph sx={{ mt: 2 }}>
        {feature.title}
      </Typography>
      <Box sx={{ minHeight: 180 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{ lineHeight: 2 }}
        >
          {feature.desc}
        </Typography>
      </Box>
      <Button
        size="large"
        endIcon={
          <ArrowForwardIcon fontSize="small" sx={{ transform: "scale(.7)" }} />
        }
        sx={{
          textTransform: "none",
          p: 0,
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Link href={feature.path} underline="none">
          Learn more
        </Link>
      </Button>
    </Box>
  );
};

export default FeatureCard;
