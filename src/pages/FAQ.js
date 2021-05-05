import styles from '../Styles/Home.module.css';
import React from 'react'
import Head from 'next/head';
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
       <Head>
      <title>Panther Crush FAQs</title>
    </Head>
    <div className={styles.MenuContainer}>
     
      <button className={styles.buttonMenu} onClick={() => {setView("Home")}}>Home</button>
      <button className={styles.buttonMenu} onClick={() => {setView("Values")}}>Our Values</button>
      <button className={styles.buttonMenu} onClick={() => {setView("FAQ")}}>FAQs</button>
    </div>

    <div className={styles.faqs} > 
      <details> 
        <summary> Who is eligible? </summary>
      <h4> All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. </h4>
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
      <h4> There are several ways you can find your crush&apos;s email. You can search their name in the directory, <a className= {styles.linkDirectory} href= "https://directory.middlebury.edu/" target="_blank" rel="noreferrer">found here</a>, or start typing their name into Outlook until their email appears.  </h4>
      </details>

      <details> 
        <summary> What happens if I match with one of my crushes? </summary>
      <h4> You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so.</h4>    
      </details>

    </div>

      <footer className={styles.footerFAQ}> 
          <button className={styles.button} onClick={() => {setView("CrushList")}}>My Crushes</button>
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