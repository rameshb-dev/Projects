var overlay = document.querySelector(".overlay");
var popupbox = document.querySelector(".popupbox");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    overlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var booktitle = booktitleinput.value;
    var bookauthor = bookauthorinput.value;
    var bookdescription = bookdescriptioninput.value;
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
    <h2>${booktitle}</h2>
    <h5>${bookauthor}</h5>
    <p>${bookdescription}</p>
    <button onclick="deletebook(event)">Delete</button>
    `;
    container.append(div);
    overlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}
