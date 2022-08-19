import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import { useContext } from "react";
import { PingEventsProvider } from "../../contexts/PingEventsProvider";
import { loadPingEvents } from "../../contexts/PingEventsProvider/actions";
import { PingEventsContext } from "../../contexts/PingEventsProvider/context";
import styles from "./networkPointView.module.css";

const NetworkPointView = forwardRef(({ network_point }, ref) => {
  const pingEventsContext = useContext(PingEventsContext)
  const { pingEventsState, pingEventsDispatch } = pingEventsContext
  let [localPingEvents, setLocalPingEvents] = useState([]);
  let firstrender = true;

  useImperativeHandle(ref, () => ({
    reloadNwpState() {
      firstrender = false;
      populatePingEvents();
    },
  }));

  async function populatePingEvents() {
    loadPingEvents(pingEventsDispatch, network_point.id).then(data=>{
      setLocalPingEvents(pingEventsState.ping_events)
      console.log(localPingEvents)
    })
  }

  useEffect(() => {
    populatePingEvents();
  }, [firstrender]);
  
  useEffect(()=>{
    populatePingEvents();
  }, [pingEventsDispatch])


  function getLastNresults() {
    console.log(localPingEvents);
  }

  function showStats(event) {
    getLastNresults();
  }

  function viewPingEvents(show) {
    setShowPingEvents(show);
  }
  {/* ${showPingEvents?'':'hidden'} */}
  return (
    <PingEventsProvider>
      {/* <div
        className={`flex justify-center rounded flex-col
                    p-2 m-2 text-black text-lg
                    uppercase font-bold  
                    ${styles[bgColor]} hover:scale-110`}
        onClick={(e) => showStats(e)}
        onMouseEnter={() => viewPingEvents(true)}
        onMouseLeave={() => viewPingEvents(false)}
      >
        <div className="">{network_point.name}</div>
        <div
          className={`flex justify-between bg-white ring ring-black items-center content-between `}
  >*/}
          {localPingEvents.map((pe) => {
            return (
              <span
                key={pe.id}
                className={`${
                  styles["bg-" + pe.type + "-color"]
                } w-[10%] border-r-[1px] border-gray-600`}
              >
                &#160;
              </span>
            );
          })}
       {/*
        </div>
      </div> */}
    </PingEventsProvider>
  );
});

export default NetworkPointView;
