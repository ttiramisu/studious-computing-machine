let uname;
let pword;

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

document.addEventListener('contextmenu', event => event.preventDefault());