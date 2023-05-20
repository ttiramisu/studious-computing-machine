// let one = one
let showpwd;

const firebaseApp = {
  apiKey: "AIzaSyDFOjyrTUdfhNmJ2pUcOhiHtwwGUGJhhmA",
  authDomain: "fir-first-test-a5e70.firebaseapp.com",
  databaseURL: "https://fir-first-test-a5e70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-first-test-a5e70",
  storageBucket: "fir-first-test-a5e70.appspot.com",
  messagingSenderId: "482023164814",
  appId: "1:482023164814:web:10135fe6e954521c1572df",
  measurementId: "G-7KH9S8T662"
};

firebase.initializeApp(firebaseApp);

const db = firebase.firestore();
const auth = firebase.auth();

const sendEmailVerification = () => {
  const user = auth.currentUser;
  user.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      alert(`An email verification link has been sent to ${user.email}`);
    })
    .catch((err) => {
      alert(err);
    });
};

const register = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('pword').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      window.location.assign('https://fire-chatty.vercel.app/');
    })
    .catch((err) => {
      alert(err);
    });
};


const login = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('pword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      window.location.assign('https://fire-chatty.vercel.app/');
    })
    .catch((err) => {
      alert(err);
    });
};

const resetPwd = () => {
  const email = document.getElementById('email').value;
  // let emailResetText = document.getElementById('pwdresetemailtext')
  // emailResetText.innerHTML = `Password reset Email sent to the following Email ${email}`

  auth.sendPasswordResetEmail(email);
};

const showPwd = function () {
  showpwd = document.getElementById("pword");
  if (showpwd.type === "password") {
    showpwd.type = "text";
  } else {
    showpwd.type = "password";
  }
};