import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { loadPingEvents } from '../../contexts/PingEventsProvider/actions'
import { PingEventsContext } from '../../contexts/PingEventsProvider/context'

function NetworkPoinsDetails() {
    const pingEventsContext = useContext(PingEventsContext)
    const {pingEventsState, pingEventsDispatch} = pingEventsContext
    // const { networkPoint, pingEvents } = pingEventsState.result
    const [pingEvents, setPingEvents] = useState({})
    useEffect(() => {
      // loadPingEvents(pingEventsDispatch);
      // setPingEvents(pingEventsState.result)
      console.log("🚀 ~ file: index.jsx ~ line 16 ~ useEffect ~ pingEventsState", pingEvents)
    }, []);

  return (
    <div>
      {JSON.stringify(pingEventsState)}
    </div>
  )
}

export default NetworkPoinsDetails