import { Box } from "@mui/material";

interface Props {
  feature: any;
}

const FeatureCard: React.FC<Props> = ({ feature }) => {
  return <Box>{JSON.stringify(feature)}</Box>;
};

export default FeatureCard;
