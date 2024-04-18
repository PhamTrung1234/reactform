import { createStore } from "redux";
import rootlistuser from "./renderuser";

const store = createStore(rootlistuser,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;