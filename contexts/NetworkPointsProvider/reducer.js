import * as types from './types'
export const reducer = (state, action) => {
    switch (action.type) {
      case types.NETWORK_POINTS_SUCCESS: {
        return { ...state, network_points: action.payload, loading: false };
      }
      case types.NETWORK_POINTS_LOADING: {
        return { ...state, loading: true };
      }
    }
  
    console.log('Não encontrei a action', action.type);
    return { ...state };
  };