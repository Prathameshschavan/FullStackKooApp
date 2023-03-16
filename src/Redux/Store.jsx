
import { legacy_createStore as createStore,applyMiddleware} from "redux"
import  Reducer  from "./Reducer";
// import thunk from "redux-thunk";

const   store =createStore(Reducer,applyMiddleware());
export default store;