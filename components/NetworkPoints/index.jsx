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
    <>
        {networkPointsState.network_points.map(nwp=>{
            return(
                <div>
                    <NetworkPointView key={nwp.id} network_point={nwp}/>
                </div>
            ) 
        })}
    </>
)
}

export default NetworkPoints;
