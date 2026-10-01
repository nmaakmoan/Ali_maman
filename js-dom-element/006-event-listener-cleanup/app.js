const mainBtn = document.getElementById("main-btn");

const removeBtn = document.getElementById("remove-btn");

function showAlert() {
    alert("Button clicked!");
}

mainBtn.addEventListener("click", showAlert);

removeBtn.addEventListener("click", () => {
    mainBtn.removeEventListener("click", showAlert);
});