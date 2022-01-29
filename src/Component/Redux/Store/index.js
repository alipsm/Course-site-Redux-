
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllCouses } from "../Action/Courses";
import { reducers } from "../Reducer";

export const store=createStore(reducers,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.dispatch(getAllCouses())

store.subscribe(()=>console.log(store.getState()))