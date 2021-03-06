import { useReducer } from "react";
import { reducer } from './reducer'
import { data } from './data'
import { NetworkPointsContext } from "./context";

export const NetworkPointsProvider = ({children})=>{
    const [networkPointsState, networkPointsDispatch] = useReducer(reducer, data)

    return (
        <NetworkPointsContext.Provider value={{networkPointsState, networkPointsDispatch}}>
            {children}
        </NetworkPointsContext.Provider>
    )
}