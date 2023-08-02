// eslint-disable-next-line import/no-anonymous-default-export
import { Create, Delete, FetchAll, Update,Like,FETCH_BY_SEARCH,START_LOADING,END_LOADING } from '../constants/actiontypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, posts: [] } , action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state,isLoading:true};
        case END_LOADING:
            return {...state,isLoading:false};
        case FetchAll:
            return{
                ...state,
                posts:action.payload.data,
                currentPage:action.payload.currentPage,
                numberOfPages:action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return  {...state,posts:action.payload};
        case Create:
            return {...state, posts: [...state.posts,action.payload]};
        case Update:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case Like:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case Delete:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
}
