import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { userReducer } from "./userReducer.js";
import { thunk } from 'redux-thunk'
const rootReducer = combineReducers({
    user: userReducer
})

const logger = (store) => (next) => (action) => {
    console.log("Dispatching:", action);
    const result = next(action);
    console.log("Next State:", store.getState());
    return result;
};


const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const middlwares = [thunk, logger]

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlwares)));