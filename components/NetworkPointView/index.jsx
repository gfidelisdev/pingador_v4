import React, { useContext, useEffect, useState } from "react";
import { getNetworkPointState } from "../../contexts/PingEventsProvider/actions";
import { PingEventsContext } from "../../contexts/PingEventsProvider/context";
import styles from "./networkPointView.module.css";
function NetworkPointView({ network_point }) {
  let [nState, setNState] = useState('');
  let [bgColor, setBgColor] = useState('');
  let [showPingEvents, setShowPingEvents] = useState('')
  // let [lastPingEvents, setLastPingEvents] = useState([])
  let localPingEvents = [];
  const getNetworkPointState = async (nwpoint_id) => {
    const lastPingEvents = await fetch(
      `http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=10`
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
    let nwp_state = checkState(await pingEvents);
    return {nwp_state, pingEvents};
  };
  useEffect(() => {
    getNetworkPointState(network_point.id).then((data) => {
      setNState(data.nwp_state);
      setBgColor(`bg-${data.nwp_state}-color`);
      localPingEvents = data.pingEvents
    });
  }, []);
  // useEffect(() => {
  //   getNetworkPointState(pingEventsDispatch,network_point.id)
  //   bg_color = `bg-${pingEventsState.nwp_state}-color`
  //   console.log(network_point.name,bg_color, pingEventsState)

  //   return () => {

  //   }
  // }, [pingEventsDispatch])

  // useEffect(() => {
  //   // console.log('ping_events_state',pingEventsState.nwp_state)
  //   // console.log(Styles[`bg-${pingEventsState.nwp_state}-color`])
  //   // console.log(bg_color)
  //   return () => {
  //   }
  // }, [pingEventsState])

  function getLastNresults() {
    console.log(localPingEvents)
  }

  function showStats(event) {
    getLastNresults();
  }

  function viewPingEvents(show){
    console.log(localPingEvents)
    setShowPingEvents(show)
  }
  return (
    <div
      className={`flex justify-center rounded
                     p-2 m-2 text-black text-lg
                     uppercase font-bold 
                     ${styles[bgColor]}`}
      onClick={(e) => showStats(e)}
      onMouseEnter={()=>viewPingEvents(true)}
      onMouseLeave={()=>viewPingEvents(false)}
    >
      {network_point.name}
      <div className={showPingEvents?'':'hidden'}></div>
    </div>
  );
}

export default NetworkPointView;
