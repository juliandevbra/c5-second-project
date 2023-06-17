import { createContext, useContext, useState } from "react";

const GlobalStates = createContext()

const Context = ({children}) => {
    const [salario, setSalario] = useState(150000)

    return (
        <GlobalStates.Provider value={{salario, setSalario}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}