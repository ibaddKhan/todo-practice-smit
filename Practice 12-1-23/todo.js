import { auth, db } from "./config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  Timestamp ,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const logbtn = document.querySelector(".logout");
const form = document.querySelector("form");
const task = document.querySelector("input");
const div = document.querySelector("div");
let arr =[]

logbtn.addEventListener("click", () => {
  signOut(auth);
  window.location = "./login.html";
});
onAuthStateChanged(auth, (user) => {
    
    if (user) {
        const uid = user.uid;
      render(uid);
    console.log(user.uid);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let obj ={
        task: task.value,
        uid: user.uid,
        postDate: Timestamp.fromDate(new Date()),
      }
      arr.push(obj)
      try {
        const docRef = await addDoc(collection(db, "todo"), obj);
        render(uid);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  } else {
    console.log("not logged in");
  }
});

async function render(uid) {
  const q = query(collection(db, "todo"),where("uid", "==", uid),orderBy("postDate", "desc"));

  const querySnapshot = await getDocs(q);
  arr=[]
  div.innerHTML=""
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    arr.push(doc.data())
    
});
console.log(arr);
arr.forEach(item => {
  div.innerHTML+=`<div>${item.task}</div>`
    
});
}
