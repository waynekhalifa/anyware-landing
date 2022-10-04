import { useState } from "react";

const useConfirm = () => {
  const [confirm, setConfirm] = useState<string | undefined>("");

  return {
    confirm,
    changeConfirm: (message: string | undefined) => setConfirm(message),
  };
};

export default useConfirm;
