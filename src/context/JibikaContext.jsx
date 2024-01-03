import { createContext, useEffect, useState } from "react";
import { localLight } from "../localStorage/localStorage";

export const HalalJibikaContext = createContext();
const JibikaContext = ({ children }) => {
  const [detailsId, setDetailsId] = useState();

  const [isLight, setIsLight] = useState(localLight());

  const handleLightDark = () => {
    setIsLight(!isLight);
  };

  useEffect(()=>{
    localStorage.setItem("isLight", JSON.stringify(isLight));
  },[isLight])

  return (
    <HalalJibikaContext.Provider
      value={{ detailsId, setDetailsId, handleLightDark, isLight }}
    >
      {children}
    </HalalJibikaContext.Provider>
  );
};

export default JibikaContext;
