import { createContext, useContext, useState } from "react";

const MainContextFile = createContext();

export const ContextProvider = ({ children }) => {
  const [choosenPanel, setChoosenPanel] = useState("home");


    

    const mainContextValue = {
        choosenPanel,
        setChoosenPanel,
    }

    return (
        <MainContextFile.Provider value={mainContextValue}>
            {children}
        </MainContextFile.Provider>
    )
}

export const useMainContext = () => useContext(MainContextFile);
