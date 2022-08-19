import React, { useContext } from 'react'
import { useEffect } from 'react'
import { loadPingEvents } from '../../contexts/PingEventsProvider/actions'
import { PingEventsContext } from '../../contexts/PingEventsProvider/context'

function NetworkPoinsDetails() {
    const pingEventsContext = useContext(PingEventsContext)
    const {pingEventsState, pingEventsDispatch} = pingEventsContext
    const { networkPoint, pingEvents } = pingEventsState.result
    useEffect(() => {
      loadPingEvents(pingEventsDispatch);
    }, [pingEventsDispatch]);

  return (
    <div>
      {JSON.stringify(pingEventsState)}
    </div>
  )
}

export default NetworkPoinsDetails