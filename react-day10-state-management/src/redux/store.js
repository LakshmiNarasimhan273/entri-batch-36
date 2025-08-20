import { createStore } from "redux";
import { counterReducer } from "./reducer";

const store = createStore(counterReducer); 
// createStore creates a empty workspace to connect our action file and reducer file
export default store;
// default export