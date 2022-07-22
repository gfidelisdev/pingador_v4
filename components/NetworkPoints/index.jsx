import React, { useContext, useEffect } from "react";
import { loadNetworkPoints } from "../../contexts/NetworkPointsProvider/actions";
import { NetworkPointsContext } from "../../contexts/NetworkPointsProvider/context";
import NetworkPointView from "../NetworkPointView";

function NetworkPoints() {
    
    const networkPointsContext = useContext(NetworkPointsContext)
    const {networkPointsState, networkPointsDispatch} = networkPointsContext


    useEffect(()=>{
        loadNetworkPoints(networkPointsDispatch)
    },[networkPointsDispatch])
    
  return (
    <div className="flex flex-wrap w-full justify-around content-between items-center">
        {networkPointsState.network_points.map(nwp=>{
            return(
                <NetworkPointView key={nwp.id} network_point={nwp}/>
            ) 
        })}
    </div>
)
}

export default NetworkPoints;
