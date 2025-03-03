import { combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./authReducer";

// const middlewares = [thunk];

// const enhancer = composeWithDevTools({
//   // Options: https://github.com/jhen0409/react-native-debugger#options
// })(applyMiddleware(...middlewares));

// const rootReducer = combineReducers({
//   rootAuth: authReducer
// });

export default combineReducers({
    rootAuth: authReducer
});
