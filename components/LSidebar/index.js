import React, { useEffect, useState } from "react";

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


const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

function LSideBar() {
  let [networkPoints, setNetworkPoints] = useState([])

  useEffect(() => {
    
    fetch('http://localhost:8080/api/network_points')
    .then(result=>result.json())
    .then(result=>{
      setNetworkPoints(result)
    })
  
    return () => {
      setNetworkPoints([])
    }
  }, [])
  
  return (
    <div className="mt-4 w-32 min-w-32 flex flex-col flex-wrap">
      <div className="rounded-box justify-center content-center items-center flex flex-col bg-gray-500 p-4">
        {networkPoints.map(nwp=>{
          return (
            <button className="btn w-full m-4 p4 hover:bg-slate-800" key={nwp.id}>{nwp.name}</button>
          )
        })}
      </div>
    </div>
  );
}

export default LSideBar;
