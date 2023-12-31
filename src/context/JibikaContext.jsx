import { createContext } from "react";

export const HalalJibikaContext = createContext();
const JibikaContext = ({ children }) => {

  const handleEditJob = (id) => {
    
  };

  return (
    <HalalJibikaContext.Provider value={{handleEditJob}}>
      {children}
    </HalalJibikaContext.Provider>
  );
};

export default JibikaContext;
