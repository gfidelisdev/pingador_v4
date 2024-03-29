import useAxios from '../../hooks/useAxios'
import * as types from './types'
export const loadPingEvents = async(dispatch, nwpoint={id:0,name:'fallback'}, limit=10) =>{
    // console.log(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEventsRaw = await useAxios(`/api/ping_events?nwpoint_id=${nwpoint.id}&limit=${limit}`, 'get')
    console.log("🚀 ~ file: actions.js ~ line 6 ~ loadPingEvents ~ pingEventsRaw", pingEventsRaw)
    // const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEvents = await pingEventsRaw.data
    // const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: {netWorkPoint: nwpoint, pingEvents: pingEvents}})
}

export const loadPingEventsByInterval = async(dispatch, nwpoint, startTime, endTime, limit=10) =>{
    const pingEventsRaw = await useAxios(`/api/ping_events?nwpoint_id=${nwpoint.id}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`, 'get')
    // const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`)
    const pingEvents = await pingEventsRaw.data
    // const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

