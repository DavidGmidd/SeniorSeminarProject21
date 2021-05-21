import styles from '../Styles/Home.module.css';
import React from 'react'
import Head from 'next/head';

export default function Goodbye() {


    let content;
  
      content = ( 
        <> 
         <Head>
        <title>Panther Crush Closed </title>
      </Head>

      <div className={styles.bye}>
        <img src="images/landscape.jpg" className={styles.Goodbye}></img>
      </div>
    </>
    )
    return (
        <> 
          {content}
        </>
      );
}
      
   




