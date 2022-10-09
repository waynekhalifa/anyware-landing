import useFeature from "@/hooks/useFeature";
import useSelected from "@/hooks/useSelected";
import { Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";
import PriceCalculator from "./PriceCalculator";

interface Props {
  isActive: boolean;
  completed: boolean;
}

const Features: React.FC<Props> = ({ isActive, completed }) => {
  const { selected, changeSelected } = useSelected();
  const { featuresListing } = useFeature("features", "feature");

  const handleClick = (id: string | number) => {
    const newSelected = new Set(selected);

    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);

    changeSelected(newSelected);
  };

  const renderCalculator = () => {
    console.log({ completed });
    if (isActive || completed)
      return (
        <PriceCalculator selectedFeatures={selected} completed={completed} />
      );

    return null;
  };

  return (
    <>
      {renderCalculator()}
      <Grid container columnSpacing={3} sx={{ mt: 4 }}>
        {featuresListing.map((feature: any) => (
          <Grid item xs={6} md={3} sx={{ mb: 3 }} key={feature.id}>
            <FeatureCard
              feature={feature}
              isSelected={selected.has(feature.id)}
              handleClick={(event: React.MouseEvent<unknown>) =>
                handleClick(feature.id)
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
