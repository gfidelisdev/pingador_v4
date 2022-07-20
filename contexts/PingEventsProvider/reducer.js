import * as types from './types'
export const reducer = (state, action) => {
    switch (action.type) {
      case types.PING_EVENTS_SUCCESS: {
        return { ...state, ping_events: action.payload, loading: false };
      }
      case types.PING_EVENTS_LOADING: {
        return { ...state, loading: true };
      }
      case types.NETWORK_POINT_STATE: {
        return { ...state, loading: true };
      }
    }
  
    console.log('Não encontrei a action', action.type);
    return { ...state };
  };