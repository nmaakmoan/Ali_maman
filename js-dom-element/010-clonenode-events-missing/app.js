const clickBtn = document.querySelector(".click-me");

function showMessage() {
    alert("Original button works!");
}

clickBtn.addEventListener("click", showMessage);

document.getElementById("clone-btn").addEventListener("click", () => {
    const original = document.getElementById("original");

    const copy = original.cloneNode(true);

    copy.addEventListener("click", showMessage);

    document.body.appendChild(copy);
});