import {
  GET_BLUETOOTH_DEVICES,
  POST_BLUETOOTH_DEVICES,
  LOADING_DATA,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
} from "../types";
import axios from "axios";
var connected = false;
var selected_device;
var connected_server;
export const discoverDevicesOrDisconnect = (data, history) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  console.log("discoverDevicesOrDisconnect in data Actions");
  connected = data;
  if (connected) {
    console.log("about to go to discoverDevices");
    dispatch(discoverDevices());
  }
  history.push("/activation");
};
const discoverDevices = () => (dispatch) => {
  console.log("discoverDevices on dataActions");
  var options = {
    acceptAllDevices: true,
  };
  let DeviceData = {};
  navigator.bluetooth
    .requestDevice(options)
    .then((device) => {
      DeviceData = {
        deviceId: device.id,
        time: new Date().toISOString(),
      };
      console.log(DeviceData);
      dispatch({
        type: GET_BLUETOOTH_DEVICES,
        payload: DeviceData,
      });
      axios.post("/bluetooth", DeviceData);
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const resetUI = () => {
  connected = false;
};
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
