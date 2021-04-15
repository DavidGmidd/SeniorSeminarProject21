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
        src="https://player.vimeo.com/video/533381740?background=1&controls=0"
        frameBorder="0" >
        </iframe>
      <div className={styles.intro} >
         <p> Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury </p> 

            {/* <p>Graduation comes sooner than you think, so try to make the most of it while you can!</p> */}
      </div>
        
      <div className={styles.overview} >
          <h3>How it works:</h3>
        </div>

        <div className={styles.information} >
            <p>In the spirit of Crush Lists, we're helping seniors make a few last connections before graduation.</p>
            <p>If you are a senior (class of 2021 and 2021.5), you can anonymously submit names of up to seven senior "crushes" between May 10 to May 17 by 5:00 pm. </p>
            <p> {/*Privacy is important to us, so */}All of your personal information and the names you submit will be kept completely private. If you match with one of your crushes, only your name and contact information will be shared with them. </p> 
            <p>You will get notified by email on May 18 if you match with any of your crushes. After that, you take it from there. </p> 
        </div>
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