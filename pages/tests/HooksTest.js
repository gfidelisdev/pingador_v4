import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

function HooksTest() {
    let network_point = {
        id: 2
    }
    const fetter = useAxios(`/api/ping_events?nwpoint_id=${network_point.id}&limit=20`,'get')
    const [presentation, setPresentation] = useState([])
    useEffect(() => {
        fetter.then(result=>{
            setPresentation(result.data)
        })
      return () => {
        setPresentation(null)
      }
    }, [])
    
  return (
    <div>
        {presentation?.map(p=>{
            return <div key={p.id}>{p.result}</div>
        })}
    </div>
  )
}

export default HooksTest