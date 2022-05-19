import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
// import { currentUserReducer, initialCurrentUser } from "../feautres/currentUser/currentUserSlice";
// import {isLogIn} from '../feautres/currentUser/currentUserSlice'
import thunk from "redux-thunk";


const initialState = {
    isLogedIn: false
}


const editeUserAction = (log) => ({
    type: "LOGIN",
    log
})


export const editeUserEffect = (email, pass) => {
    return (dispatch) => {
        const e = "admin"
        const p = "admin123"
        if(email === e && pass === p){
            setTimeout(() => dispatch(editeUserAction(email === e && pass === p)), 3000)
        }else{
            dispatch(editeUserAction(email === e && pass === p))
            console.log("Incorrect");
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLogedIn: action.log
            }
            default: 
            return state
    }
}

const store = configureStore({
    reducer: {
        reducer
    },
    applyMiddleware: applyMiddleware(thunk)
})


// function logger(store){
//   return function(next) {
//     return function(action){
//       console.log('yayaya');
//       return next(action)
//     }
//   }
// } 

// const store = createStore(combineReducers({
//   currentUser:currentUserReducer
// }),
// {
//     currentUser: initialCurrentUser,
//   },applyMiddleware(thunk));

export default store;
