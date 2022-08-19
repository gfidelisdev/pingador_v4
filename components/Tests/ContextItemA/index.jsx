import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { loadPingEvents } from '../../../contexts/PingEventsProvider/actions'

import { PingEventsContext } from '../../../contexts/PingEventsProvider/context'

function ContextItemA({children}) {

    const pingEventsContext = useContext(PingEventsContext)
    const {pingEventsState, pingEventsDispatch} = pingEventsContext
    useEffect(()=>{
        console.log("🚀 ~ file: index.jsx ~ line 10 ~ ContextItemA ~ pingEventsState", pingEventsState)
    }, [pingEventsDispatch])

    function change(item){

        loadPingEvents(pingEventsDispatch,{id:item})
    }

  return (
    <div>
        <button onClick={()=>change(1)}>ok</button>
        <button onClick={()=>change(2)}>ok</button>
        <button onClick={()=>change(3)}>ok</button>
        <button onClick={()=>change(4)}>ok</button>
        <button onClick={()=>change(5)}>ok</button>
        <button onClick={()=>change(6)}>ok</button>
        <button onClick={()=>change(7)}>ok</button>
        <button onClick={()=>change(8)}>ok</button>
        {children}
    </div>
  )
}

export default ContextItemA