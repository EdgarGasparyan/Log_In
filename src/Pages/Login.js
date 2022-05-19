import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   selectName,
//   selectPass,
//   editeUser,
//   selectLog,
// } from "../feautres/currentUser/currentUserSlice";
import {editeUserEffect} from "../store/store"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState(false);

  // const name = useSelector(selectName);
  // const pass = useSelector(selectPass);
  // const log = useSelector(selectLog);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(username.length && password.length){
      dispatch(editeUserEffect(username, password));
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <div>
        <h1>Login IN</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button onClick={handleSubmit}>Log In</button>
        
      </div>

      {/* <div>
        <h3>{name}</h3>
        <h3>{pass}</h3>
      </div> */}
    </>
  );
};

export default Login;
