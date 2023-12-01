import {auth,db}from './config.js';
import {createUserWithEmailAndPassword}from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const email =document.querySelector("#email")
const pass =document.querySelector("#pass")
const form =document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then( async(userCredential) => {
      const user = userCredential.user;

     
        try {
          const docRef = await addDoc(collection(db, "users"), {
            pass: pass.value,
            email:email.value,
            uid : user.uid
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      console.log(user);
      // window.location ="./login.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
})