let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
    document.querySelector(".js-calculation").value = calculation;
}
function displayName(value) {
    calculation += value;
    displayCalculation();
    document.querySelector(".js-calculation").value = "Thank You";
}
