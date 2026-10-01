const box = document.getElementById("status-box");

const btn = document.getElementById("toggle-btn");

btn.addEventListener("click", () => {

    if (box.classList.contains("active")) {
        box.classList.remove("active");
    } else {
        box.classList.add("active");
    }

});