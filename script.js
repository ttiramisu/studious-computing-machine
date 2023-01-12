let uname;
let pword;
let showpwd;
let input;
let text;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    verifyLogin();
  }
})

const verifyLogin = function () {
  uname = document.getElementById("uname").value;
  pword = document.getElementById("pword").value;

  if (uname == "jw" && pword === "urmom") {
    window.location.assign("login-successful.html");
  } else if (uname == "jin" && pword === "troll") {
    window.location.assign("login-successful.html");
  } else if (uname == "hkr" && pword === "kid") {
    window.location.assign("login-successful.html");
  } else if (uname == "jerry" && pword === "troll2") {
    window.location.assign("login-successful.html");
  } else {
    document.getElementById("fail-msg").classList.remove("hidden");
  }
}

const showPwd = function () {
  showpwd = document.getElementById("pword");
  if (showpwd.type === "password") {
    showpwd.type = "text";
  } else {
    showpwd.type = "password";
  }
}

input = document.getElementById("pword");
text = document.getElementById("caps-text");

input.addEventListener("keyup", function (event) {
  if (event.getModifierState("CapsLock")) {
    document.getElementById("caps-text").classList.remove("hidden");
  } else {
    document.getElementById("caps-text").classList.add("hidden");
  }
});

document.addEventListener('contextmenu', event => event.preventDefault());


document.onkeydown = function (e) {

  // disable F12 key
  if (e.keyCode == 123) {
    return false;
  }

  // disable I key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
    return false;
  }

  // disable I key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }

  // disable J key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }

  // disable U key
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
}