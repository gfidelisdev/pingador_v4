import * as types from './types'
export const reducer = (state, action) => {
    switch (action.type) {
      case types.CLUSTERS_SUCCESS: {
        return { ...state, clusters: action.payload, loading: false };
      }
      case types.CLUSTERS_LOADING: {
        return { ...state, loading: true };
      }
    }
  
    console.log('Não encontrei a action', action.type);
    return { ...state };
  };