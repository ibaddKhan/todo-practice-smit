import {auth}from './config.js';
import {signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const email =document.querySelector("#email")
const pass =document.querySelector("#pass")
const form =document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword (auth, email.value, pass.value)
    .then( (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location="./todo.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
})