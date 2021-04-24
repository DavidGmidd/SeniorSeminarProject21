
import styles from '../pages/Styles/Home.module.css';
import React from 'react'
import { useState } from 'react';
import Home from '../pages/index';

export default function Values() {

    const [currentMode, setCurrentMode] = useState("Values");
    
    return (
     
    <div className={styles.MenuContainer}>
     
    <button className={styles.buttonMenu} onClick={() => {setCurrentMode("Home")}}>Home</button>
    <button className={styles.buttonMenu} onClick={() => {setCurrentMode("Values")}}>Our Values</button>
    <button className={styles.buttonMenu} onClick={() => { <Home page = {"FAQ"} />}} >FAQ</button>
    {/* <button className={styles.buttonMenu}> Contact</button> */}
  </div>


    );
}