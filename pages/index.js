import Head from 'next/head';
import { useState } from 'react';
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
    <main>

      <div className={styles.welcome} >
          <h2>Welcome to the Panther Crush</h2>
      </div>
          <div className={styles.intro} >
              <h4>Graduation is coming too soon, so try to make the most of it while you can</h4>
              <h4>See if your proc crush has also been crushing on you</h4> 
          </div>
          
          <div className={styles.overview} >
              <h3>How it works:</h3>
          </div>
  
          <div className={styles.information} >
              <p>We're taking the long-lived tradition of Crush Lists and making it more accessible for seniors</p>
              <p> If you are a senior (class of 2021 and 2021.5), you can anonymously submit names of up to seven senior "crushes" between May 16 to May 21 by 5:00 pm </p>
              <p> Privacy is important to us, so all of your personal information and the names you submit will be kept completely anonymous. Only if you match with your crush will your name be shared with them </p> 
              <p>  You will get notified by email on May 22nd if you match with any of your crushes. After that, you can take it from there </p> 
              <button className={styles.button} onClick={() => {setCurrentMode("CrushList")}}>Give me my crush</button>
          </div>
         
      </main> 
      </>)
  }
  else {
    content = (<>  </>);
  }
  
return (

<div className={styles.plyr} id="player" >
{/* <link rel="stylesheet" href= "../pages/Styles/plyr.css" />  */}
      <script src= "https://cdn.plyr.io/3.6.4/plyr.js"></script>
  
    <iframe 
      height="100%" width="100%"
      src="https://player.vimeo.com/video/76979871?loop=1&controls=0&sidedock=0&autoplay=1"
      frameborder="0"  > 
      
        {content}
    </iframe>
  <footer className={styles.footer}> CS 701 Final Project</footer>

</div>
    ); }