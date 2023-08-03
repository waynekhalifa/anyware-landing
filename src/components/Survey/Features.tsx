import useFeature from "@/hooks/useFeature";
import useSelected from "@/hooks/useSelected";
import { Box, Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";
import PriceCalculator from "./PriceCalculator";

interface Props {
  isActive: boolean;
  completed: boolean;
  handleSelectedFeature:(color:any)=>void
  handleSelectedMonth:(color:any)=>void
  handleTotalPrice:(color:any)=>void
}

const Features: React.FC<Props> = ({ isActive, completed,handleSelectedFeature,handleSelectedMonth,handleTotalPrice }) => {
  const { selected, changeSelected } = useSelected();
  const { featuresListing } = useFeature("features", "feature");

  const handleClick = (id: string | number) => {
    const newSelected = new Set(selected);

    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);

    changeSelected(newSelected);
    handleSelectedFeature(newSelected)

  };
  const renderCalculator = () => {
    
    if (isActive || completed)
      return (
        <PriceCalculator handleSelectedMonth={handleSelectedMonth} handleTotalPrice={handleTotalPrice} selectedFeatures={selected} completed={completed} />
      );

    return null;
  };

  return (
    <>
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
    {renderCalculator()}
  </Box>
  <Grid container columnSpacing={3} sx={{ mt: 4 }}>
    {featuresListing.map((feature: any) => (
      <Grid item xs={12} md={6} lg={4} xl={3} sx={{ mb: 3 }} key={feature.id}>
        <FeatureCard
          feature={feature}
          isSelected={selected.has(feature.title)}
          handleClick={(event: React.MouseEvent<unknown>) =>
            handleClick(feature.title)
          }
        />
      </Grid>
    ))}
  </Grid>
</>

  );
};

export default Features;
