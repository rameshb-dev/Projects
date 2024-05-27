var formButton = document.querySelector(".form-container");
var overlay = document.querySelector(".msg-overlay");
var confirmMsg = document.querySelector(".confirm-msg");

function formbutton(event) {
    event.preventDefault();
    overlay.style.display = "block";
    confirmMsg.style.display = "block";
}

function closeMsg() {
    overlay.style.display = "none";
    confirmMsg.style.display = "none";
}

// why below code not working??? doubt 20.01.2024

// formButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     overlay.style.display = "block";
//     confirmMsg.style.display = "block";
// });

// confirmMsg.addEventListener("click", function () {
//     overlay.style.display = "none";
//     confirmMsg.style.display = "none";
// });
