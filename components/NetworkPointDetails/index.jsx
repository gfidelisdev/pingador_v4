import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { loadPingEvents } from '../../contexts/PingEventsProvider/actions'
import { PingEventsContext } from '../../contexts/PingEventsProvider/context'
import styles from './networkPointDetails.module.css'
function NetworkPoinsDetails() {
    const pingEventsContext = useContext(PingEventsContext)
    const {pingEventsState, pingEventsDispatch} = pingEventsContext
    // const { networkPoint, pingEvents } = pingEventsState.result
    const [pingEvents, setPingEvents] = useState({})
    useEffect(() => {
      // loadPingEvents(pingEventsDispatch);
      // setPingEvents(pingEventsState.result)
    }, []);

  return (
    <div className={styles.main}>
      <div>{pingEventsState.result?.netWorkPoint?.name}</div>
      <div>{pingEventsState.result?.netWorkPoint?.fqdn}</div>
      <div>{pingEventsState.result?.netWorkPoint?.ip_address}</div>
      {pingEventsState.result?.pingEvents?.map(pingEvent=>{
        return <div className={styles[pingEvent.type]}>{pingEvent.result}</div>
      })}
    </div>
  )
}

export default NetworkPoinsDetails