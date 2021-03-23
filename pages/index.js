import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../pages/Styles/Home.module.css';
import Button from 'react-bootstrap/Button';
import CrushList from './CrushList';

export default function Home() {



  return (
    <div>
  <CrushList> </CrushList>  
  </div>

  // <div className={styles.body}>
  // <Head>
  //     <title>Panther Crush Welcome</title>
  //   </Head>
  //     <main>
  //       <p className= {styles.title}> HELLO WORLD, THIS IS LIVE TESTING </p> 
  //       <Button> HELLO BOOTSTRAP BUTTON</Button>
        
  //     </main>
  //     <footer className={styles.footer1}> CS 701 Final Project</footer>
  // </div>

    );
  }