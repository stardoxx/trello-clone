import {createStore} from "redux";
import rootReducer from "../reducer";
// const reducer = () => {}

const store = createStore(rootReducer);

export default store;