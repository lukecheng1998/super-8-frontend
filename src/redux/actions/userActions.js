//Prompts to talk to the backend and perform actions
import {
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LOADING_UI,
  SET_USER,
  CLEAR_ERRORS,
  SET_SICKNESS,
} from "../types";
import axios from "axios";

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data, //data returned back from the reducer
      });
    })
    .catch((err) => console.log(err));
};
export const changeSicknessStatus = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  let retData = {
    message: "successfully updated your sickness"
  }
  console.log(userData);
  axios
    .post("/user", userData)
    .then((res) => {
      dispatch({type: CLEAR_ERRORS})
      dispatch(getUserData()); //get the updated status of user data from database
      history.push("/sickness");
    })
    .then((res) => {
      dispatch({
        type: SET_SICKNESS,
        payload: res.data.payload
      })
    })
    .catch((err) => console.log(err));
};
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData()); //get the user data from database
      dispatch({ type: CLEAR_ERRORS }); //Clear errors and go to next state
      history.push("/home");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/home");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};
