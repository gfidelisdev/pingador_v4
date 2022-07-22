import * as types from './types'
export const loadPingEvents = async(dispatch, nwpoint_id, limit=10) =>{
    console.log(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

export const loadPingEventsByInterval = async(dispatch, nwpoint_id, startTime, endTime, limit=10) =>{
    const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`)
    const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

