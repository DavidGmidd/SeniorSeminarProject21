import styles from '../pages/Styles/Home.module.css';
import React from 'react'
import { useState } from 'react';
import Home from '../pages/index';
import Values from '../pages/Values';
import CrushList from '../pages/CrushList'

export default function FAQ() {

  const [currentView, setView] = useState();

  let content;

  if(currentView === 'Values') {
    content = ( <Values/>)

  } else if(currentView === 'Home') {
    content = ( <Home/>)
  } else if(currentView === 'CrushList') {
    content = ( <CrushList/>)

  } else {
    content = ( 
      <> 
    <div className={styles.MenuContainer}>
     
      <button className={styles.buttonMenu} onClick={() => {setView("Home")}}>Home</button>
      <button className={styles.buttonMenu} onClick={() => {setView("Values")}}>Our Values</button>
      <button className={styles.buttonMenu} onClick={() => {setView("FAQ")}}>FAQ</button>
    </div>
      <h1> TESTING FAQ

      </h1>


      <footer className={styles.footer}> 
          <button className={styles.button} onClick={() => {setCurrentMode("CrushList")}}>My Crushes</button>
        </footer>
      </>
    
    )
  }



    return (
      <>
    {content}
      </>

    );
}