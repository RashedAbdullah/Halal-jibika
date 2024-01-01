import { createContext, useState } from "react";

export const HalalJibikaContext = createContext();
const JibikaContext = ({ children }) => {
  const [detailsId, setDetailsId] = useState();

  return (
    <HalalJibikaContext.Provider value={{detailsId, setDetailsId}}>
      {children}
    </HalalJibikaContext.Provider>
  );
};

export default JibikaContext;
