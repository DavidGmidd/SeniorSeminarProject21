/* eslint-disable react/no-unescaped-entities*/


import Head from 'next/head';
import { useState } from 'react';
import React from 'react'
import styles from '../pages/Styles/Home.module.css';
//import player from '../pages/Styles/plyr.css';
import CrushList from '../pages/CrushList';
//import middlebury_720 from '../images/middlebury_720.mp4';

export default function Home() {

  const [currentMode, setCurrentMode] = useState("Welcome");

  let content;

  if (currentMode === "CrushList") {

    content = ( <CrushList/> )
  } 
  else if (currentMode === "Welcome") {
    content = (
    <> 
    <Head>
      <title>Panther Crush Welcome</title>
    </Head>

    <main className= {styles.main}>
      <div className={styles.plyr} id="player" >
  {/* <link rel="stylesheet" href= "/path/to/plyr.css" /> */}
      <script src= "https://cdn.plyr.io/3.6.4/plyr.js"></script>

  {/* Code we need for video
  loop=1&controls=0&sidedock=0&autoplay=1&background=1   new mine: 533381740 chris's: 368849006 mine: 532302544  vimeo: 76979871*/}
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
      
      <div className={styles.buttonContainer}>
        </div>
        <footer className={styles.footer}> 
          <button className={styles.button} onClick={() => {setCurrentMode("CrushList")}}>My Crushes</button>
        </footer>
      </div>
    </main> 

      </>) 
  }
  else {
    content = (<>  </>);
  }
  
return (
    <> 
      {content}
    </>
  );
}