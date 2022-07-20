import { useReducer } from "react";
import { reducer } from './reducer'
import { data } from './data'
import { ClustersContext } from "./context";

export const ClustersProvider = ({children})=>{
    const [clustersState, clustersDispatch] = useReducer(reducer, data)

    return (
        <ClustersContext.Provider value={{clustersState, clustersDispatch}}>
            {children}
        </ClustersContext.Provider>
    )
}