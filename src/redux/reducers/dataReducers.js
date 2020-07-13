import {GET_BLUETOOTH_DEVICES, POST_BLUETOOTH_DEVICES, LOADING_DATA} from "../types"
const initialState = {
    devices: [],
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case GET_BLUETOOTH_DEVICES: //Obtain bluetooth device from online
            return {
                ...state,
                //more might be needed later
            }
        default:
            return state
    }
}