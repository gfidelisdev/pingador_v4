import * as types from './types'
export const loadClusters = async(dispatch) =>{
    const clustersRaw = await fetch(`http://localhost:8080/api/clusters`)
    const clusters = await clustersRaw.json()
    dispatch({type:types.CLUSTERS_SUCCESS, payload: clusters})
}