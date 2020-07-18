import { SET_AUTHENTICATED, SET_USER, SET_UNAUTHENTICATED, LOADING_USER, SET_SICKNESS } from '../types'

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    message: ""
}
export default function (state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                ...action.payload    
            };
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_SICKNESS:
            return {
                ...state,
                //isSick: [action.payload, ...state.isSick],
                loading: false,
                message: action.payload,
                ...action.payload
            }
        default:
            return state;
    }
}