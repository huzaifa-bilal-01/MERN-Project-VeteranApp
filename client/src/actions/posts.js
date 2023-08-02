import * as api from '../api';
import { FetchAll,Create,Delete,Update,FETCH_BY_SEARCH,START_LOADING,END_LOADING } from '../constants/actiontypes';

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);
        dispatch({ type: FetchAll, payload: data });
       
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        console.log(searchQuery);
      dispatch({ type: START_LOADING });

      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

       dispatch({ type: FETCH_BY_SEARCH, payload:  data   });
       
       dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: Create, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: Update, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
      await await api.deletePost(id);
  
      dispatch({ type: Delete, payload: id });
    } catch (error) {
        console.log("Not Deleting");
      console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: Update, payload: data });
    } catch (error) {
        console.log(error);
    }
}