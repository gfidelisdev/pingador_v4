import React, { forwardRef, useImperativeHandle, useContext, useEffect, useRef, useState } from "react";
import { getNetworkPointState } from "../../contexts/PingEventsProvider/actions";
import { PingEventsContext } from "../../contexts/PingEventsProvider/context";
import styles from "./networkPointView.module.css";

const NetworkPointView = forwardRef(({ network_point }, ref) => {

  let [nState, setNState] = useState('');
  let [bgColor, setBgColor] = useState('');
  let [showPingEvents, setShowPingEvents] = useState('')
  let [localPingEvents, setLocalPingEvents] = useState([]);
  let firstrender = true
  function getNwpId(){
    return network_point.id
  }  
  const getNetworkPointState = async (nwpoint_id) => {
    const lastPingEvents = await fetch(
      `http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=20`
    );
    const pingEvents = await lastPingEvents.json();
    const checkState = function (ping_events) {
      let failures = ping_events.filter((pe) => pe.type == "danger");
      if (failures.length == ping_events.length) {
        return "danger";
      }
      if (failures.length > ping_events.length * 0.5) {
        return "warning";
      }
      let warnings = ping_events.filter((pe) => pe.type == "warning");
      if (failures.length + warnings.length >= ping_events.length * 0.7) {
        return "warning";
      }
      return "success";
    };

    const mockCheckState=(ping_events)=>{
      let mockResult = Math.random()
      if (mockResult>0.7) return 'danger'
      if (mockResult>0.3) return 'warning'
      return 'success'
    }
    let nwp_state = checkState((await pingEvents).slice(-10));
    // let nwp_state = mockCheckState(await pingEvents);
    return {nwp_state, pingEvents};
  };

  useImperativeHandle(ref, ()=>({
    reloadNwpState(){
      // console.log(network_point.id)
      firstrender = false
      populatePingEvents()
    },
    
  }))

  function populatePingEvents(){
    getNetworkPointState(network_point.id).then((data) => {
      setNState(data.nwp_state);
      setBgColor(`bg-${data.nwp_state}-color`);
      setLocalPingEvents(data.pingEvents)
    });
  }
  useEffect(() => {
    populatePingEvents()
  }, [firstrender]);


  function getLastNresults() {
    console.log(localPingEvents)
  }

  function showStats(event) {
    getLastNresults();
  }

  function viewPingEvents(show){
    setShowPingEvents(show)
  }
  return (
    <div
      className={`flex justify-center rounded flex-col
                     p-2 m-2 text-black text-lg
                     uppercase font-bold  
                     ${styles[bgColor]} hover:scale-110`}
      onClick={(e) => showStats(e)}
      onMouseEnter={()=>viewPingEvents(true)}
      onMouseLeave={()=>viewPingEvents(false)}
    >
      <div className="">{network_point.name}</div>
      {/* ${showPingEvents?'':'hidden'} */}
      <div className={`flex justify-between bg-white ring ring-black items-center content-between `}>
        {localPingEvents.map(pe=>{
          return (
            <span key={pe.id} className={`${styles['bg-'+pe.type+'-color']} w-[10%] border-r-[1px] border-gray-600`}>&#160;</span>
          )
        })}
      </div>
    </div>
  );
})

export default NetworkPointView;
