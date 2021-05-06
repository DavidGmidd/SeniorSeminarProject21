import styles from '../Styles/Home.module.css';
import React from 'react'
import Head from 'next/head';

export default function Welcome() {


    let content;
  
    if(currentView === 'Welcome') {
      content = ( <Welcome/>)
  
    } else {
      content = ( 
        <> 
         <Head>
        <title>Welcome </title>
      </Head>

      <div className={styles.plyr} id="player" >
      <script src= "https://cdn.plyr.io/3.6.4/plyr.js"></script>

      <iframe
        height="100%" width="100%" opacity="0.5"
        src="https://player.vimeo.com/video/545728683?background=1&controls=0"
        frameBorder="0" >
      </iframe>
      </div>
    </>
    )
    }
    return (
        <> 
          {content}
        </>
      );
}
      
   




