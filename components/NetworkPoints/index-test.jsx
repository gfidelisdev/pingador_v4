import React from 'react'
import { useContext, useEffect } from 'react'
import { loadNetworkPoints } from '../../contexts/NetworkPointsProvider/actions'
import { NetworkPointsContext } from '../../contexts/NetworkPointsProvider/context'
import { loadPingEvents } from '../../contexts/PingEventsProvider/actions'
import { PingEventsContext } from '../../contexts/PingEventsProvider/context'

function NetworkPoints({cluster_id}) {
  const networkPointsContext = useContext(NetworkPointsContext)
  const { networkPointsState, networkPointsDispatch} = networkPointsContext

  const pingEventsContext = useContext(PingEventsContext)
  const { pingEventsState, pingEventsDispatch } = pingEventsContext

  useEffect(()=>{
    console.log(networkPointsState)
  },[networkPointsState])
  // useEffect(() => {
  //   loadNetworkPoints(networkPointsDispatch, cluster_id)
  // }, [networkPointsDispatch])
  
  function setResult(networkPoint){
    console.warn(networkPoint)
    alert(JSON.stringify(networkPoint))
    loadPingEvents(pingEventsDispatch, networkPoint)

  }
  return (
    <div>
      {networkPointsState.network_points.map(networkPoint=>{
        return <div onClick={()=>setResult(networkPoint)}>{JSON.stringify(networkPoint)}</div>
      })}
    </div>
  )
}

export default NetworkPoints