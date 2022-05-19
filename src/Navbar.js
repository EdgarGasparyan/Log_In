import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import {selectLog} from '../src/feautres/currentUser/currentUserSlice'
const Navbar = () => {

  const {isLogedIn} = useSelector((state) => state.reducer)
  console.log(isLogedIn);
  return (
    
    <>
      <div className="container gray highlightTextIn">
      <Link alt="LOGIN"to="/login">LOGIN</Link>
        {isLogedIn && <>
        <Link alt="HOME" to='/home'>HOME</Link>
        <Link alt="ARTICLES"to='/articles' >ARTICLES</Link>
        <Link alt="PORTFOLIO" to='/portfolio'>PORTFOLIO</Link>
        <Link alt="ABOUT" to='/about'>ABOUT</Link>
        <Link alt="CONTACT" to='/contact'>CONTACT</Link>
        </> }
      </div>
    </>
  );
};

export default Navbar;
