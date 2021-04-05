
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../pages/Styles/Home.module.css';
import Button from 'react-bootstrap/Button';

export default function CrushList() {

        
    const [currentName, setName] = useState('');
    const [currentLastName, setLastName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const[currentPhoneNum, setPhoneNum] = useState('')

function saveUserInfo(){

}

function cancel(){

    setName('')
    setEmail('')
    setLastName('')

}

function submitCrushes(){

}

function contactPreference(){

/* // Get the checkbox
const checkEmail = document.getElementById("EmailPreffered");
const  checkText = document.getElementById("TextPreffered");
// Get the output text
const phoneNum = document.getElementById("PhoneNumber");
const thanks = document.getElementById("Thanks");

// If the checkbox is checked, display the output text
if (checkEmail.checked == true){
    thanks.style.display = "block";

} if (checkText.checked == true){
    phoneNum.style.display = "block";

  } else {

    } */
}

    return (
       
    <div>
        <Head>
        <title>Panther Crush List</title>
      </Head>
        <main className={styles.main}>
           
        <div className={styles.UserInfo }>
            <h2 className= {styles.titleSection}> Your Info:</h2>
            <details>
            <input className= {styles.input} onChange={e => { setName(e.target.value) }} value={currentName} type="text" aria-label="title" placeholder = "First Name" required />
            <input className= {styles.input} onChange={e => { setLastName(e.target.value) }} value={currentLastName} type="text" aria-label="title" placeholder = "Last Name" required />
            <input className= {styles.input} onChange={e => { setEmail(e.target.value) }} value={currentEmail} type="text" aria-label="title" placeholder = "Email address" required />
            <button className={styles.button} onClick={() => { saveUserInfo() }}disabled={currentName === '' || currentLastName === '' || currentEmail === ''}> Save </button>
            <button className={styles.button} onClick={() => { cancel()}} > Cancel </button>
            </details>
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
            
            <button className={styles.button} onClick={() => { submitCrushes() }} /*disabled={currentTitle === ''} */> Submit Crush List </button>
            <button className={styles.button}/* onClick={() => { complete() }} */> Cancel </button>
        </div>
           <div className= {styles.Preference}>
            <h2 className= {styles.titleSection}> Contact Preference:</h2>
            
            <label className= {styles.container}>Email
            <input id="EmailPreferred"type="checkbox" onClick={() => {contactPreference()}}/>
            <span className= {styles.checkmark}></span>
            </label>
            <label className= {styles.container}>Text:
            <input id="TextPreferred" type="checkbox" onClick={() => {contactPreference()}}/>
            <span className= {styles.checkmark}></span>
            </label> 
            <input id="PhoneNumber" type="tel" placeholder="Phone Number" className={styles.phoneinput} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={e => { setPhoneNum(e.target.value) }} value={currentPhoneNum}/>

        </div>
        </main>
    </div>
    
    );
}