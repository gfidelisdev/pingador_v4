import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { PingEventsContext } from '../../../contexts/PingEventsProvider/context'

function ContextItemB() {

    const pingEventsContext = useContext(PingEventsContext)
    const {pingEventsState, pingEventsDispatch} = pingEventsContext
    useEffect(()=>{
        console.log("🚀 ~ file: index.jsx ~ line 11 ~ ContextItemB ~ pingEventsState", pingEventsState)
    },[])

  return (
    <div>
        {JSON.stringify(pingEventsState)}
    </div>
  )
}

export default ContextItemB