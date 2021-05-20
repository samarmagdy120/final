import { JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case JOB_LIST_SUCCESS:
      return {
        ...state,
        Jobs: action.payload,
        loading: false,
      };
    case JOB_LIST_FAIL:
      return {
        errors: action.payload,
      };
    default:
      return state;
  }
};
