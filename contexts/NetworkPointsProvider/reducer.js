export const reducer = (state, action) => {
    switch (action.type) {
      case 'POSTS_SUCCESS': {
        return { ...state, posts: action.payload, loading: false };
      }
      case 'POSTS_LOADING': {
        return { ...state, loading: true };
      }
    }
  
    console.log('Não encontrei a action', action.type);
    return { ...state };
  };