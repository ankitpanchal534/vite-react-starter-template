import { createContext, useContext } from "react";
import { ThemeProviderState } from "./theme-provider";

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
  };

  
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const useTheme = () => {
    const context = useContext(ThemeProviderContext);
  
    if (context === undefined)
      throw new Error("useTheme must be used within a ThemeProvider");
  
    return context;
  };
  export { useTheme };
  