import { createContext } from "react";

const JibikaContext = ({ children }) => {
  const HalalJibikaContext = createContext();
  return (
    <HalalJibikaContext.Provider value={"Anything"}>
      {children}
    </HalalJibikaContext.Provider>
  );
};

export default JibikaContext;
