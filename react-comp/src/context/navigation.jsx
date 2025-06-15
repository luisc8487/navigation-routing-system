import {createContext} from "react";

const Navigation = createContext();

function NavigationProvider({children}) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationProvider};
export default NavigationContext;
