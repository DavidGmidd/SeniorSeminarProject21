/* eslint-disable react/no-unescaped-entities*/

   /*"start": "next start -p $PORT", */
import Head from 'next/head';
import { useState } from 'react';
import React from 'react'
import styles from '../Styles/Home.module.css';
import CrushList from '../pages/CrushList';
import Values from '../pages/Values';
import FAQ from '../pages/FAQ';


export default function Home() {

 
  const [currentMode, setCurrentMode] = useState('Home');
  
  let content;

  if (currentMode === "Home") {

    content = (
    <> 
    <Head>
      <title>Panther Crush Welcome</title>
    </Head>

    <main className= {styles.main}>
      <div className={styles.MenuContainer}>
     
        <button className={styles.buttonMenu} onClick={() => {setCurrentMode('Home')}}>Home</button>
        <button className={styles.buttonMenu} onClick={() => {setCurrentMode("Values")}}>Our Values</button>
        <button className={styles.buttonMenu} onClick={() => {setCurrentMode("FAQ")}}>FAQs</button>
      </div>

      <div className={styles.plyr} id="player" >
  {/* <link rel="stylesheet" href= "/path/to/plyr.css" /> */}
      <script src= "https://cdn.plyr.io/3.6.4/plyr.js"></script>

        <iframe
        height="100%" width="100%" opacity="0.5"
        src="https://player.vimeo.com/video/538885546?background=1&controls=0"
        frameBorder="0" >
        </iframe>
      <div className={styles.intro} >
         <p> Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury </p> 

          {/* <p>Graduation comes sooner than you think, so try to make the most of it while you can!</p> */}
      
      </div>

      <div className={styles.howitworks} >
         <p>How it works:</p>
      </div>

      <iframe
      height="100%" width="100%" opacity="0.5"
      src="https://player.vimeo.com/video/538941352?background=1&controls=0"
      frameBorder="0" >
      </iframe>
        <footer className={styles.footer}> 
          <button className={styles.button} onClick={() => {setCurrentMode("CrushList")}}>My Crushes</button>
        </footer>
      </div>
    </main> 

      </>) 
  }

  else if (currentMode === "CrushList") {
    content = ( <CrushList  /> )
  } 
  else if (currentMode === "Values") {
      content = ( <Values /> )

  } else if (currentMode === "FAQ") {
    content = ( <FAQ /> )
  } 

  
return (
    <> 
      {content}
    </>
  );
}