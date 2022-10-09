import { useState } from "react";

const useSelected = () => {
  const [selected, setSelected] = useState<any>(new Set());

  return {
    selected,
    changeSelected: (selected: any) => setSelected(selected),
  };
};

export default useSelected;
