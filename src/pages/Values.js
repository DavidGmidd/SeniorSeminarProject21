
import styles from '../Styles/Home.module.css';
import React from 'react'
import { useState } from 'react';
import Home from '../pages/index';
import FAQ from '../pages/FAQ';
import CrushList from '../pages/CrushList';


export default function Values() {


 
  const [currentView, setView] = useState();

  let content;

  if(currentView === 'FAQ') {
    content = ( <FAQ/>)

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
      <button className={styles.buttonMenu} onClick={() => {setView("FAQ")}}>FAQs</button>
    </div>

    <div className={styles.values} >
      <p> The Panther Crush is built by students to enhance two simple aspects of traditional crush lists: privacy and respect. In terms of privacy, we don’t share your list with anyone, so no one sees your list and you don’t see anyone else&apos;s. This relieves the pressure of putting up a crush list in a public space while still allowing you to connect with your crush before graduation. </p>
      <p> At the same time, we’re committed to fostering a safe and respectful environment for you to make a new connection. Compared with traditional crush lists, the Panther Crush reduces the discomfort of having your name shown publicly on someone else’s list who you might not want to associate with. Instead, you and your crush need to consensually write each other's name down for you to get a match, which is designed to improve transparency and respect between students. </p>
      <p> Ultimately, the Panther Crush is not intended to replace traditional crush lists; instead, it is intended to make crush lists more accessible to seniors by offering a more anonymous way to make a new connection before graduation.</p>
    
    </div>

      <footer className={styles.footer}> 
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