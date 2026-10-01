const btn = document.getElementById("toggle-btn");

// Check for saved theme on load
const savedTheme = localStorage.getItem("user-theme");

if (savedTheme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";

    localStorage.setItem("user-theme", "dark");
});