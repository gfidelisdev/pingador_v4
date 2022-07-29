import * as types from './types'
export const loadClusters = async(dispatch) =>{
    const clustersRaw = await axios(`/api/clusters`, 'get')
    // const clustersRaw = await fetch(`http://localhost:8080/api/clusters`)
    const clusters = await clustersRaw.data
    console.error("🚀 ~ file: actions.js ~ line 6 ~ loadClusters ~ clustersRaw.data", clustersRaw.data)
    // const clusters = await clustersRaw.json()
    dispatch({type:types.CLUSTERS_SUCCESS, payload: clusters})
}