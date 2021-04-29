
import Head from 'next/head';
import { useState } from 'react';
import styles from '../pages/Styles/Home.module.css';
import React from 'react'
import Home from  '../pages/index';
import FAQ from '../pages/FAQ';
import Values from '../pages/Values';

export default function CrushList() {


  const [currentView, setView] = useState();

  let content;

  if(currentView === 'Values') {
    content = ( <Values/>)

  } else if(currentView === 'Home') {
    content = ( <Home/>)
  } else if(currentView === 'FAQ') {
    content = ( <FAQ/>)

  } else {
    content = ( 
      
      <> 
      <div>
        <Head>
        <title>Panther Crush List</title>
      </Head>
        <main className={styles.main}>
        <div className={styles.MenuContainer}>
     
     <button className={styles.buttonMenu} onClick={() => {setView("Home")}}>Home</button>
     <button className={styles.buttonMenu} onClick={() => {setView("Values")}}>Our Values</button>
     <button className={styles.buttonMenu} onClick={() => {setView("FAQ")}}>FAQ</button>
     {/* <button className={styles.buttonMenu}> Contact</button> */}
 
   </div>
           
        </main>
    </div>
       <div className={styles.plyr} id= "player">
        <iframe src="https://player.vimeo.com/video/536975744?background=1&loop=0" 
        width="100%" height="100%" 
        frameBorder="0" >
        </iframe>
        </div>
      </>
    );
  }
  


    return (
       
      <>
    {content}
    </>
    
    );
}