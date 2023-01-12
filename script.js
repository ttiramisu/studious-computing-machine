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
  } else if (uname == "jerry" && pword === "troll 2") {
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
