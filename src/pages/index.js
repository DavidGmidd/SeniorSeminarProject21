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

      <div className={styles.faqs} > 
      <h2> FAQs</h2>

      <details> 
        <summary> Who is eligible? </summary>
      <h4> Seniors in the class of 2021 and 2021.5. We will ask you to include your email when you submit your crushes to verify that you are a senior. </h4>
      </details>

      <details> 
        <summary> When is this? </summary>
      <h4> Seniors can fill out their virtual crush list between May 10 to May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. </h4>
      </details>

      <details> 
        <summary> Who can see my crush list? </summary>
      <h4> No one can see the list you submit. Only if you match with your crush will your name and email be shared with them.</h4>
      </details>

      <details> 
        <summary> How do I submit my crushes? </summary>
      <h4> Click on <b>My Crushes</b> at the bottom of the website to fill out your list. The form will ask you to include the email addresses of your crushes. </h4>
      </details>

      <details> 
        <summary> How do I find my crush&apos;s email? </summary>
      <h4> There are several ways you can find your crush&apos;s email. You can search their name in the directory, <a href= "https://directory.middlebury.edu/">found here</a>, or start typing their name into Outlook until their email appears.  </h4>
      </details>

      <details> 
        <summary> What happens if I match with one of my crushes? </summary>
      <h4> You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so.</h4>    
      </details>

    </div>

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