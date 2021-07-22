import { useState } from "react";

const useCheck = () => {
  const [isValueChecked, setIsValueChecked] = useState(false);

  const checkHandler = () => {
    setIsValueChecked(true);
  };
  return {
    isChecked: isValueChecked,
    checkHandler,
    setIsValueChecked,
  };
};

export default useCheck;
