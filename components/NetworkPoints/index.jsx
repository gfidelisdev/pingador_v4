import React, { useContext, useEffect, useRef } from "react";
import { loadNetworkPoints } from "../../contexts/NetworkPointsProvider/actions";
import { NetworkPointsContext } from "../../contexts/NetworkPointsProvider/context";
import NetworkPointView from "../NetworkPointView";
import socketClient from "socket.io-client";
import { loadPingEvents } from "../../contexts/PingEventsProvider/actions";
import { PingEventsContext } from "../../contexts/PingEventsProvider/context";

function NetworkPoints() {
  const networkPointsContext = useContext(NetworkPointsContext);
  const { networkPointsState, networkPointsDispatch } = networkPointsContext;
  const nwpView = useRef([])

  const pingEventsContext = useContext(PingEventsContext)
  
  const { pingEventsState, pingEventsDispatch } = pingEventsContext

  var socket = socketClient("http://10.4.7.61:8080");
  socket.on("msg", (msg) => {
    if (typeof window !== 'undefined') {
      nwpView.current.forEach(nwp=>{
        nwp?.reloadNwpState()
      })
    }
  });

  useEffect(() => {
    loadNetworkPoints(networkPointsDispatch);
  }, [networkPointsDispatch]);

  function changeNetworkPointDetails(networkPoint){
    loadPingEvents(pingEventsDispatch, networkPoint)
    console.log("🚀 ~ file: index.jsx ~ line 33 ~ changeNetworkPointDetails ~ pingEventsDispatch,",  pingEventsState)
    
  }

  return (
    <div className="flex flex-wrap w-full justify-around content-between items-center">
      {networkPointsState.network_points.map((nwp) => {
        return (
          <div key={nwp.id} onClick={()=>changeNetworkPointDetails(nwp)}>
            <NetworkPointView ref={el=>nwpView.current[nwp.id]=el} network_point={nwp} />
          </div>
        );
      })}
    </div>
  );
}

export default NetworkPoints;
