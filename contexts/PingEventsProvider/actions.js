import * as types from './types'
export const loadPingEvents = async(dispatch, nwpoint_id, limit=10) =>{
    const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}`)
    const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

export const loadPingEventsByInterval = async(dispatch, nwpoint_id, startTime, endTime, limit=10) =>{
    const pingEventsRaw = await fetch(`http://localhost:8080/api/ping_events?nwpoint_id=${nwpoint_id}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`)
    const pingEvents = await pingEventsRaw.json()
    dispatch({type:types.PING_EVENTS_SUCCESS, payload: pingEvents})
}

export const getNetworkPointState = async (dispatch, nwpoint_id) => {
    const lastPingEvents = await loadPingEvents(dispatch, nwpoint_id)
    const checkState = function(ping_events){
        let failures = ping_events.filter(pe=>pe.type==danger)
        if (failures.length == ping_events.length){
            return 'danger'
        }
        if (failures.length > ping_events.length/2){
            return 'warning'
        }
        let warnings = ping_events.filter(pe=>pe.type=='warning')
        if (failures.length + warnings.length >= ping_events.length*0.7) {
            return 'warning'
        }
        return 'success'
    }
    dispatch({type:types.NETWORK_POINT_STATE, payload: {checkState}})
}