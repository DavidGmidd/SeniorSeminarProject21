
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../pages/Styles/Home.module.css';
import Button from 'react-bootstrap/Button';

export default function CrushList() {

        
    const [currentName, setName] = useState('');
    const [currentLastName, setLastName] = useState('');
    const [currentEmail, setEmail] = useState('');

    return (
       
    <div className={styles.body}>
    <Head>
        <title>Panther Crush List</title>
      </Head>
        <main>
           
        <div className={styles.UserInfo }>
            <h2 className= {styles.titleSection}> Your Info:</h2>
            <input className= {styles.input}  onChange={e => { setName(e.target.value) }} value={currentName} type="text" aria-label="title" placeholder = "First Name" required />
            <input className= {styles.input} onChange={e => { setLastName(e.target.value) }} value={currentLastName} type="text" aria-label="title" placeholder = "Last Name" required />
            <input className= {styles.input}  onChange={e => { setEmail(e.target.value) }} value={currentEmail} type="text" aria-label="title" placeholder = "Email address" required />
            <button className={styles.button} disabled={currentName === '' || currentLastName === '' || currentEmail === ''}> Save </button>
            <button className={styles.button}/* onClick={() => { complete() }} */> Cancel </button>
        </div>
        <div className={styles.crushList }>
            <h2 className= {styles.titleSection} type="button" class="collapsible">Your Crushes:</h2>  
            <input className= {styles.crushInput} /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email"/>
            <input className= {styles.crushInput} /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email"/>
            <input className= {styles.crushInput}  /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email" />
            <input className= {styles.crushInput} /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email"/>
            <input className= {styles.crushInput} /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email"/>
            <input className= {styles.crushInput}  /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email" />
            <input className= {styles.crushInput} /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email"/>
            <input className= {styles.crushInput} /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email"/>
            <input className= {styles.crushInput}  /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/ type="text" aria-label="title" placeholder = "Crush Email" />
            
            <button className={styles.button} /*onClick={() => { makeArticle() }} disabled={currentTitle === ''} */> Submit Crush List </button>
            <button className={styles.button}/* onClick={() => { complete() }} */> Cancel </button>
        </div>
           
        </main>
        <footer className={styles.footer1}> CS 701 Final Project</footer>
    </div>
    
    );
    }