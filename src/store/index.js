import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import mainReducer from './reducer'
import thunk from 'redux-thunk'
export default createStore(mainReducer)