import React, { useReducer, createContext } from "react";
import axios from "axios";
import authReducer from "./AuthReducer";

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL, 
  LIST_USERS_SUCCESS,
  LIST_USERS_FAIL,
  CLEAR_ERRORS,
  RETURN_SECCESS,
  ADD_PROFILE_IMAGE_FAIL,
  ADD_PROFILE_IMAGE_SUCCES,
  PROFILE_DATA_FAIL,
  PROFILE_DATA_SUCCESS,
  USER_LOGOUT
} from "../types";


const url = "https://services-works.herokuapp.com/api/auth";

export const AuthContext = createContext();

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    userAuth: null,
    errors: null,
    success : false,
    user : null,
    userProfile : null,
    users :[]
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

   const getUserData=async()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`     
      },
    }; 
    try {
      const res = await axios.get(`${url}/user`,config);
      console.log(res); 
      dispatch({
        type :LOAD_USER_SUCCESS,
        payload : res.data.user
      })
    } catch (error) {
      console.log(error);
      dispatch({ type: LOAD_USER_FAIL, payload: error.message });
    }
  } 
  //registerCraftMan
  const registerCraftMan = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${url}/register-provider`,
        userData,
        config
      );
      // console.log(res);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data,
      });
      // getUserData()
    } catch (err) {
      dispatch({
        type: FAIL_REGISTER,
        payload: err.response.data.message,
      });
      console.log(err);
    }
  };

  //registerCraftMan
  const registerClient = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/register-user`, userData, config);
      console.log(res);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data,
      });
      // getUserData()
    } catch (err) {
      dispatch({
        type: FAIL_REGISTER,
        payload: err.response.data.message,
      });
      console.log(err);
    }
  };

  //loginCraftMan
  const login = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/login`, userData, config);
      console.log(res);
      getUserData()
      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL_LOGIN,
        payload: err.response.data,
      });
    }
  };
 
  const getUsersViaJobID=async(id)=>{
    try {
      const res = await axios.get(`${url}/${id}`);
      dispatch({
        type: LIST_USERS_SUCCESS,
        payload: res.data.users,
      });
    } catch (error) {
      dispatch({
        type: LIST_USERS_FAIL,
        payload: error.message
      });
    }
  }

  const uploadProfileImage = async(image) =>{
    const formdata = new FormData();
    formdata.append('image',image)
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.token,
        'Content-Type': 'multipart/form-data',
      },
    }; 
    try {
    await axios.put(`${url}/update-image`,formdata,config)
    dispatch({ type: ADD_PROFILE_IMAGE_SUCCES });
    } catch (error) {
      dispatch({
        type: ADD_PROFILE_IMAGE_FAIL,
        payload: error.message
      });
    }
  }

  const getProfileData = async(id) =>{
   try {
     const res = await axios.get(`${url}/profile/${id}`);
     dispatch({
       type : PROFILE_DATA_SUCCESS,
       payload : res.data.user
     })
   } catch (error) {
    dispatch({
      type: PROFILE_DATA_FAIL,
      payload: error.message
    });
   }
  }

  const clearError=()=>{
    dispatch({ type: CLEAR_ERRORS });
  }

  const refershSuccess=()=>{
    dispatch(
      { type: RETURN_SECCESS }
    )
  }

   const logout =()=> {
     dispatch({ type: USER_LOGOUT });
    //  localStorage.removeItem("token");
      document.location.href = "/login";
  };
  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        user : state.user,
        errors: state.errors,
        users : state.users,
        success : state.success,
        token : state.token,
        userProfile : state.userProfile,
        registerCraftMan,
        login,
        registerClient,
        getUserData,
        getUsersViaJobID,
        uploadProfileImage,
        getProfileData,
        clearError,
        refershSuccess,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
