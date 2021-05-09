/* eslint-disable react/no-unescaped-entities*/

  
import Head from 'next/head';
import { useState } from 'react';
import React from 'react'
import styles from '../Styles/Home.module.css';
import CrushList from '../pages/CrushList';
import Values from '../pages/Values';
import FAQ from '../pages/FAQ';
import Welcome from '../pages/Welcome';



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
      
      <img src="images/Logo5.png" className={styles.Logo}/>
    
        <button className={styles.buttonMenu} onClick={() => {setCurrentMode('Home')}}>Home</button>
        <button className={styles.buttonMenu} onClick={() => {setCurrentMode("Values")}}>Our Values</button>
        <button className={styles.buttonMenu} onClick={() => {setCurrentMode("FAQ")}}>FAQs</button>
      </div>

   
      <div className={styles.plyr} id="player" >

      {/* <video width="400px" height="300px" controls>
  <source src="images/middlebury_720.mp4" type="video/mp4"/>
        </video> */}
        

        <iframe
        height="100%" width="100%" opacity="0.5"
        src="https://player.vimeo.com/video/546275933?background=1&controls=0"
        frameBorder="0" >
        </iframe>

      <div className={styles.intro} >
         <p> Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury! </p> 
        <div className={styles.howitworks} > 
            <p>How it works:</p>
        </div>
      </div>

      {/* <iframe
      height="100%" width="100%" opacity="0.5"
      src="https://player.vimeo.com/video/545712031?background=1&controls=0"
      frameBorder="0" >
      </iframe> */}
      <div className={styles.instructionsContainer}> 
      <img src="images/final_how_it_works.png" className={styles.instructions}/>
      </div>

      <div className={styles.faqsHome} > 
      <h2 className={styles.faqsTitle}> FAQs </h2>
      <details> 
        <summary> <b> Who is eligible? </b> </summary>
      <p> All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. </p>
      </details>

      <details> 
        <summary> <b> When is this? </b>  </summary>
      <p> Seniors can fill out their virtual crush list between May 10 and May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. </p>
      </details>

      <details> 
        <summary> <b> Who can see my crush list? </b> </summary>
      <p> No one can see the list you submit. Only if you match with your crush will your name and email be shared with them.</p>
      </details>

      <details> 
        <summary>  <b> How do I submit my crushes? </b> </summary>
      <p> Click on <i>Crush List</i> at the bottom of the page to fill out your list. The form will ask you to include the email addresses of your crushes. </p>
      </details>

      <details> 
        <summary> <b> How do I find my crush&apos;s email? </b> </summary>
      <p> There are several ways you can find your crush&apos;s email. You can search their name in the directory, <a className= {styles.linkDirectory} href= "https://directory.middlebury.edu/" target="_blank" rel="noreferrer">found here</a>, or start typing their name into Outlook until their email appears.  </p>
      </details>

      <details> 
        <summary> <b> What happens if I match with one of my crushes? </b> </summary>
      <p> You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so.</p>    
      </details>

    </div>
        <footer className={styles.footer}> 
          <button className={styles.button} onClick={() => {setCurrentMode("CrushList")}}>Crush List</button>
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
  } 
  else if (currentMode === "FAQ") {
    content = ( <FAQ /> )
  } 
  else  {
    content = ( <Welcome /> ) 
  } 

  
return (
    <> 
      {content}
    </>
  );
}