let showpwd;

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFOjyrTUdfhNmJ2pUcOhiHtwwGUGJhhmA",
  authDomain: "fir-first-test-a5e70.firebaseapp.com",
  projectId: "fir-first-test-a5e70",
  storageBucket: "fir-first-test-a5e70.appspot.com",
  messagingSenderId: "482023164814",
  appId: "1:482023164814:web:10135fe6e954521c1572df",
  measurementId: "G-7KH9S8T662"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('pword').value

  auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      window.location.assign('register-successful.html')
    })
    .catch((err) => {
      alert("User Exists")
    })
}

const login = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('pword').value

  auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      window.location.assign('login-successful.html')
    })
    .catch((err) => {
      alert("Username or Password error")
    })
}

const resetPwd = () => {
  const email = document.getElementById('email').value
  auth.sendPasswordResetEmail(email)
}

const showPwd = function () {
  showpwd = document.getElementById("pword");
  if (showpwd.type === "password") {
    showpwd.type = "text";
  } else {
    showpwd.type = "password";
  }
}
