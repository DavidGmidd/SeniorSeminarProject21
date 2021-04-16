
import Head from 'next/head';
import { useState } from 'react';
import styles from '../pages/Styles/Home.module.css';
import React from 'react'

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