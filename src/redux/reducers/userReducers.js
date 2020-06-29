import { SET_AUTHENTICATED, SET_USER, SET_UNAUTHENTICATED, LOADING_USER } from '../types'

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {}
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
        default:
            return state;
    }
}