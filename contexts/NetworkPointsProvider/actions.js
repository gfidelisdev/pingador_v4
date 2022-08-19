import useAxios from '../../hooks/useAxios'
import * as types from './types'
export const loadNetworkPoints = async(dispatch, cluster_id=null) =>{
    let networkPointsRaw
    if (cluster_id) networkPointsRaw = await useAxios(`/api/network_points?cluster_id=${cluster_id}`, 'get')
    // if (cluster_id) networkPointsRaw = await fetch(`http://localhost:8080/api/network_points?cluster_id=${cluster_id}`)
    else networkPointsRaw = await useAxios(`/api/network_points`, 'get')
    // else networkPointsRaw = await fetch(`http://localhost:8080/api/network_points`)
    const networkPoints = await networkPointsRaw.data
    // const networkPoints = await networkPointsRaw.json()
    dispatch({type:types.NETWORK_POINTS_SUCCESS, payload: networkPoints})
}

