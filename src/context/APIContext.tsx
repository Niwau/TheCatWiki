import { createContext, ReactNode } from "react";
import { Breeds } from "../types/api";
import { useFetch } from "../utils/api";

export const APIContext = createContext<Breeds>([])

export const APIContextProvider = ({ children } : { children: ReactNode}) => {

    const breeds = useFetch()

    return (
        <APIContext.Provider value={breeds} >
            { children }
        </APIContext.Provider>
    )
}