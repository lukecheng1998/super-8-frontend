import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducers";
import uiReducer from "./reducers/uiReducer";
import dataReducer from "./reducers/dataReducers";
//More reducers may be needed later on
const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  user: userReducer,
  UI: uiReducer,
  data: dataReducer,
});
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);
// const store = createStore(
//   reducers,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
export default store;
