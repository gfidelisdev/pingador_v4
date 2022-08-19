import * as types from './types'
export const reducer = (state, action) => {
    switch (action.type) {
      case types.PING_EVENTS_SUCCESS: {
        console.log("🚀 ~ file: reducer.js ~ line 7 ~ reducer ~ action.payload", action.payload)
        return { ...state, result: action.payload, loading: false };
      }
      case types.PING_EVENTS_LOADING: {
        return { ...state, loading: true };
      }
      case types.NETWORK_POINT_STATE: {
        return { ...state, nwp_state: action.payload.nwp_state, loading: true };
      }
    }
  
    console.log('Não encontrei a action', action.type);
    return { ...state };
  };