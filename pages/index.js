import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../pages/Styles/Home.module.css';
//import landscape from '../images/landscape.png'; // Tell webpack this JS file uses this image
//console.log(landscape);
//return <img src={landscape} alt="landscape" />;

export default function Home() {



return (
   
<div className={styles.body}>
<Head>
    <title>Panther Crush Welcome</title>
  </Head>
    <main>
        
        <div className={styles.welcome} >
            <h2>Welcome to the Panther Crush</h2>
        </div>

        <div className={styles.intro} >
            <h5>Graduation is coming too soon, so try to make the most of it while you can</h5>
            <h5>See if your proc crush has also been crushing on you</h5> 
        </div>
        
        <div className={styles.overview} >
            <h4>How it works:</h4>
        </div>

        <div className={styles.information} >
            <p>We're taking the long-lived tradition of Crush Lists and making it more accessible for seniors</p>
            <p> If you are a senior (class of 2021 and 2021.5), you can anonymously submit names of up to seven senior "crushes" between May 16 to May 21 by 5:00 pm </p>
            <p> Privacy is important to us, so all of your personal information and the names you submit will be kept completely anonymous. Only if you match with your crush will your name be shared with them </p> 
            <p>  You will get notified by email on May 22nd if you match with any of your crushes. After that, you can take it from there </p> 
        </div>

        <div className={styles.button} >
            <button type="button" onclick=" ">Give me my crush</button>
        </div>
        
    </main>
    <footer className={styles.footer1}> CS 701 Final Project</footer>
</div>

);
}