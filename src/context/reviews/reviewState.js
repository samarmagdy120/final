import React, { useReducer, createContext } from "react";
import axios from "axios";
import reviewReducer from "./reviewReducer";

import
    {REVIEW_LIST_SUCCESS,
    REVIEW_LIST_FAIL,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAIL
} from "../types";

const url = "https://services-works.herokuapp.com/api/auth/review";

export const ReviewContext = createContext();

const ReviewState = (props) => {
  const initialState = {
    reviews: [],
    loading: true,
    errors: null,
  };
  const [state, dispatch] = useReducer(reviewReducer, initialState);

   const getReviews =  async (id) =>{
       try {
        const res = await axios.get(`${url}/${id}`)
        dispatch({
            type : REVIEW_LIST_SUCCESS,
            payload : res.data.reviews 
        })
       } catch (error) {
        dispatch({
            type : REVIEW_LIST_FAIL,
            payload : error.message
        })
       }
   }

   const addReviews = async(id,review) =>{
       const config ={
           headers :{
            "Authorization": "Bearer "+ localStorage.token,
            "Content-Type": "application/json",
           }
       }
    try {
        const res = await axios.post(`${url}/${id}`,review,config)
        dispatch({
            type : ADD_REVIEW_SUCCESS,
            payload : res.data 
        })
    } catch (error) {
        dispatch({
            type : ADD_REVIEW_FAIL,
            payload : error.message
        })
    }
   }


  return (
    <ReviewContext.Provider
      value={{
        reviews: state.reviews,
        errors: state.errors,
        loading: state.loading,
        addReviews,
        getReviews
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;
