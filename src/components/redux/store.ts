import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./reducer/CounterReducer";

const rootReducer = combineReducers({
   counter: CounterReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
