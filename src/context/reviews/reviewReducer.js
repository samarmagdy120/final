import { ADD_REVIEW_FAIL,REVIEW_LIST_FAIL,REVIEW_LIST_SUCCESS,ADD_REVIEW_SUCCESS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case REVIEW_LIST_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    case REVIEW_LIST_FAIL:
    case ADD_REVIEW_FAIL:
      return {
        errors: action.payload,
      };
     case ADD_REVIEW_SUCCESS:
       return{
       ...state,
       loading : true
     } 
    default:
      return state;
  }
};
