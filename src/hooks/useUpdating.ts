import { useState } from "react";

const useUpdating = () => {
  const [updating, setUpdating] = useState<boolean>(false);

  return {
    updating,
    changeUpdating: (value: boolean) => setUpdating(value),
  };
};

export default useUpdating;
