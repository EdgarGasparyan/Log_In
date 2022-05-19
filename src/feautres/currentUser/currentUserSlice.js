export const initialCurrentUser = {
  name: "admin",
  pass: "admin123",
  islogened: false,
};

export function currentUserReducer(state = {}, action) {
  if (action.type === "edite-user") {
    return {
      ...state,
      name: action.payload.name,
      pass: action.payload.pass,
      islogened: action.payload.islogened
    };
  }
  return state;
}
export const editeUser = (newUser, newPass) => {
  if(newUser === initialCurrentUser.name &&
    newPass === initialCurrentUser.pass)
  return {
    type: "edite-user",
    payload: {
      name: newUser,
      pass: newPass,
      islogened: true
    },
  };
};

export const selectName = (state) => {
  return state.currentUser.name;
};

export const selectPass = (state) => {
  return state.currentUser.pass;
};

export const selectLog = (state) => {
  return state.currentUser.islogened;
} 


// export const isLogIn = (newUser, newPass) => {
//   if (
//     newUser === initialCurrentUser.name &&
//     newPass === initialCurrentUser.pass
//   ) {
//     console.log("is logened");
//     return (initialCurrentUser.log = true);
//   }
// };
