import { usePostData } from "/../src/hooks/usePostData";
import { CREATE_NEW_USER, ERROR, GET_LOGGED_USER, LOGIN_USER } from "../types";

export const createNewUser = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/register", formData);
    dispatch({
      type: CREATE_NEW_USER,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/login", formData);
    dispatch({
      type: LOGIN_USER,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};

export const getLoggedUser = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/profile", formData);
    dispatch({
      type: GET_LOGGED_USER,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};


