
import Head from 'next/head';
import { useState } from 'react';
import styles from '../pages/Styles/Home.module.css';
import React from 'react'
import Home from  '../pages/index';

export default function CrushList() {


    return (
       
    <div>
        <Head>
        <title>Panther Crush List</title>
      </Head>
        <main className={styles.main}>
        <div className={styles.MenuContainer}>
     
     <button className={styles.buttonMenu} onClick={() => {setMode()}}>Home</button>
     <button className={styles.buttonMenu} onClick={() => {setMode("Values")}}>Our Values</button>
     <button className={styles.buttonMenu} onClick={() => {setMode("FAQ")}}>FAQ</button>
     {/* <button className={styles.buttonMenu}> Contact</button> */}
 
   </div>
           
        <div className={styles.plyr} id= "player">
        <iframe src="https://player.vimeo.com/video/536975744?background=1&loop=0" 
        width="100%" height="100%" 
        frameborder="0" >
        </iframe>
        </div>
        </main>
    </div>
    
    );
}