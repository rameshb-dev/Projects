const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cPasswordVal = cPassword.value.trim();
  let success = true;

  if (usernameVal === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please Enter a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, "Password must be at least 8 character ");
  } else {
    setSuccess(password);
  }
  if (cPasswordVal === "") {
    success = false;
    setError(cPassword, "Confirm password is required");
  } else if (cPasswordVal !== passwordVal) {
    success = false;
    setError(cPassword, "Password does not match");
  } else {
    setSuccess(cPassword);
  }
  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.remove("error");
  inputGroup.classList.add("success");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
};
