import { createStore,combineReducers,applyMiddleware } from "redux";
import { currentUserReducer, initialCurrentUser } from "../feautres/currentUser/currentUserSlice";
// import {isLogIn} from '../feautres/currentUser/currentUserSlice'
import thunk from "redux-thunk";


// function logger(store){
//   return function(next) {
//     return function(action){
//       console.log('yayaya');
//       return next(action)
//     }
//   }
// } 

const store = createStore(combineReducers({
  currentUser:currentUserReducer
}),
{
    currentUser: initialCurrentUser,
  },applyMiddleware(thunk));

export default store;
