
import Head from 'next/head';
import { useState } from 'react';
import styles from '../Styles/Home.module.css';
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
   
      <div className={styles.MenuContainer}>
        <img src="images/Logo5.PNG" className={styles.Logo}/>
        <button className={styles.buttonMenu} onClick={() => {setView("Home")}}>Home</button>
        <button className={styles.buttonMenu} onClick={() => {setView("Values")}}>Our Values</button>
        <button className={styles.buttonMenu} onClick={() => {setView("FAQ")}}>FAQs</button> 
      </div>
      <div className={styles.DirectoryInCrushlst}>
    <h3> Find your crush&apos;s email <a className= {styles.linkDirectory} href= "https://directory.middlebury.edu/" target="_blank" rel="noreferrer">here</a></h3>
    </div>
    </div>
      <div>  <img src="images/blue-panther.png" className={styles.BluePanther}/></div>
       <div className={styles.Form}>
     
        <iframe src="https://player.vimeo.com/video/546613564?background=1&loop=0" 
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