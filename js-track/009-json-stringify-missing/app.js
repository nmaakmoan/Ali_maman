const user = { name: "Alice", level: 5 };

document.getElementById("save-btn").addEventListener("click", () => {
    localStorage.setItem("user_profile", JSON.stringify(user));
});

document.getElementById("load-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("user_profile"));

    document.getElementById("display").innerText = "Loaded: " + data.name;
});