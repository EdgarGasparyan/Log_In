import React from "react";
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <div className={styles.session_container}>
    <div className={styles.session_title}>
       <h2>SESSION NOTES</h2> 
      </div>  
    <div className={styles.session_box}></div>  
    <div className={styles.add_page}>
        <div className={styles.add_button}>+</div>
        Add page
      </div>  
    </div>
    </>
  );
};

export default Home;
