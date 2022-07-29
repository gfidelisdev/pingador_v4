import React, { useContext, useEffect, useRef } from "react";
import { loadNetworkPoints } from "../../contexts/NetworkPointsProvider/actions";
import { NetworkPointsContext } from "../../contexts/NetworkPointsProvider/context";
import NetworkPointView from "../NetworkPointView";
import socketClient from "socket.io-client";

function NetworkPoints() {
  const networkPointsContext = useContext(NetworkPointsContext);
  const { networkPointsState, networkPointsDispatch } = networkPointsContext;
  const nwpView = useRef([])

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

  return (
    <div className="flex flex-wrap w-full justify-around content-between items-center">
      {networkPointsState.network_points.map((nwp) => {
        return (
          <div key={nwp.id}>
            <NetworkPointView ref={el=>nwpView.current[nwp.id]=el} network_point={nwp} />
          </div>
        );
      })}
    </div>
  );
}

export default NetworkPoints;
