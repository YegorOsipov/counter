import {combineReducers} from "redux";
import {CounterReducer} from "./reducer/CounterReducer";

const root = combineReducers({
   changeCounter: CounterReducer,
});

