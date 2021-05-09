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
      <img src="images/Logo5.png" className={styles.Logo}/>
      <button className={styles.buttonMenu} onClick={() => {setView("Home")}}>Home</button>
      <button className={styles.buttonMenu} onClick={() => {setView("Values")}}>Our Values</button>
      <button className={styles.buttonMenu} onClick={() => {setView("FAQ")}}>FAQs</button>
    </div>

    <div className={styles.faqs} > 
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

      <footer className={styles.footerFAQ}> 
          <button className={styles.button} onClick={() => {setView("CrushList")}}>Crush List</button>
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