import { useReducer } from "react";
import { reducer } from './reducer'
import { data } from './data'
import { PingEventsContext } from "./context";

export const PingEventsProvider = ({children})=>{
    const [pingEventsState, pingEventsDispatch] = useReducer(reducer, data)

    return (
        <PingEventsContext.Provider value={{pingEventsState, pingEventsDispatch}}>
            {children}
        </PingEventsContext.Provider>
    )
}