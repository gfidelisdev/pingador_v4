import React, { useContext, useEffect, useState } from "react";

import { Avatar, Button, Box, Nav, Stack, Text, Sidebar } from "grommet";

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  Split,
  StatusInfoSmall,
} from "grommet-icons";
import { loadNetworkPoints } from "../../contexts/NetworkPointsProvider/actions";
import { NetworkPointsContext } from "../../contexts/NetworkPointsProvider/context";


const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

function LSideBar() {
  let [clusters, setClusters] = useState([])
  let [networkPoints, setNetworkPoints] = useState([])

  const networkPointsContext = useContext(NetworkPointsContext)
  const {networkPointsState, networkPointsDispatch} = networkPointsContext
  
  useEffect(() => {
    fetch('http://localhost:8080/api/clusters')
    .then(data=>data.json())
    .then(data=>{
      setClusters([{name:'Todos', id:0},...data])
    })
    .catch(error=>{
      console.error(error)
    })
  
    return () => {
      setClusters([])
    }
  }, [])
  const changeCluster = (id)=>{
    loadNetworkPoints(networkPointsDispatch, id)
    // fetch(`http://localhost:8080/api/network_points?cluster_id=${id}`)
    // .then(data=>data.json())
    // .then(data=>{
    //   setNetworkPoints(data)
    //   console.log(data)
    // })
    // .catch(error=>{
    //   console.error(error)
    // })
  }

  return (
    <div className="mt-4 w-32 min-w-32 flex flex-col flex-wrap">
      <div className="rounded-box justify-center content-center items-center flex flex-col bg-gray-500 p-4">
        {clusters.map(cluster=>{
          return (
            <button className="btn w-full m-4 p4 hover:bg-slate-800" key={cluster.id} onClick={()=>changeCluster(cluster.id)}>{cluster.name}</button>
          )
        })}
      </div>
    </div>
  );
}

export default LSideBar;
