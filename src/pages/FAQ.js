import styles from '../pages/Styles/Home.module.css';
import React from 'react'
import { useState } from 'react';
import Home from '../pages/index';

export default function FAQ() {

    const [currentMode, setCurrentMode] = useState("FAQ");

return(

    <div className={styles.MenuContainer}>
     
    <button className={styles.buttonMenu}  onClick={() => { <Home page = {"Home"} />}}>Home</button>
    <button className={styles.buttonMenu}  onClick={() => {setCurrentMode("Values")}}>Our Values</button>
    <button className={styles.buttonMenu} onClick={() => {setCurrentMode("FAQ")}}>FAQ</button>


  </div>


);

}