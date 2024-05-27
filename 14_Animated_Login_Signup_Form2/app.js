const loginEle = document.getElementById("login");
const registerEle = document.getElementById("register");
const btnEle = document.getElementById("btn");

function login() {
    loginEle.style.left = "27px";
    registerEle.style.right = "-350px";
    btn.style.left = "0";
}

function register() {
    loginEle.style.left = "-350px";
    registerEle.style.right = "27px";
    btnEle.style.left = "150px";
}

// Hide / View Password in Login Page

function myLogPassword() {
    const logPassword = document.getElementById("logPassword");
    const eye = document.getElementById("eye");
    const eyeSlash = document.getElementById("eye-slash");

    if (logPassword.type === "password") {
        logPassword.type = "text";
        eye.style.opacity = "0";
        eyeSlash.style.opacity = "1";
    } else {
        logPassword.type = "password";
        eye.style.opacity = "1";
        eyeSlash.style.opacity = "0";
    }
}

function myRegPassword() {
    const regPassword = document.getElementById("regPassword");
    const eye2 = document.getElementById("eye-2");
    const eyeSlash2 = document.getElementById("eye-slash-2");

    if (regPassword.type === "password") {
        regPassword.type = "text";
        eye2.style.opacity = "0";
        eyeSlash2.style.opacity = "1";
    } else {
        regPassword.type = "password";
        eye2.style.opacity = "1";
        eyeSlash2.style.opacity = "0";
    }
}
