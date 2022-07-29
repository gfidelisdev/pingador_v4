import useAxios from '../../hooks/useAxios'
import * as types from './types'
export const loadPingEvents = async(dispatch, nwpoint_id, limit=10) =>{
    console.log(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEventsRaw = await useAxios(`/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`, 'get')
    // const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEvents = await pingEventsRaw.data
    console.error("🚀 ~ file: actions.js ~ line 8 ~ loadPingEvents ~ pingEventsRaw.data", pingEventsRaw.data)
    // const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

export const loadPingEventsByInterval = async(dispatch, nwpoint_id, startTime, endTime, limit=10) =>{
    const pingEventsRaw = await useAxios(`/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`, 'get')
    // const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`)
    const pingEvents = await pingEventsRaw.data
    // const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

