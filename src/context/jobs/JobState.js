import React, { useReducer, createContext } from "react";
import axios from "axios";
import jobReducer from "./jobReducer";

import { JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../types";

const url = "https://services-works.herokuapp.com/api/jobs";

export const JobContext = createContext();

const JobState = (props) => {
  const initialState = {
    Jobs: [],
    loading: true,
    errors: null,
  };
  const [state, dispatch] = useReducer(jobReducer, initialState);

  // get jobs
  const getJobs = async () => {
    try {
      const res = await axios.get(`${url}`);
      // console.log(res.data);
      dispatch({ type: JOB_LIST_SUCCESS, payload: res.data.jobs });
    } catch (error) {
      // console.log(error);
      dispatch({ type: JOB_LIST_FAIL, payload: error.message });
    }
  };

  return (
    <JobContext.Provider
      value={{
        Jobs: state.Jobs,
        errors: state.errors,
        loading: state.loading,
        getJobs,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;
