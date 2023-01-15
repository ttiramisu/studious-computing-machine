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

gapi.load('auth2', function () {
  gapi.auth2.init({
    client_id: '482023164814-j6j2uc5imchi8pj76gp22qu2muud7gdv.apps.googleusercontent.com',
  });
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

const Gsignin = (googleUser) => {
  var id_token = googleUser.getAuthResponse().id_token;
  var credential = firebase.auth.GoogleAuthProvider.credential(id_token);

  firebase.auth().signInWithCredential(credential)
    .then(function (res) {
      alert("Google sign-in successful");
      window.location.assign('login-successful.html')
    })
    .catch(function (err) {
      alert(error.message);
    });
}


const showPwd = function () {
  showpwd = document.getElementById("pword");
  if (showpwd.type === "password") {
    showpwd.type = "text";
  } else {
    showpwd.type = "password";
  }
}

