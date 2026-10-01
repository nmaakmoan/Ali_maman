document.getElementById("add-text").addEventListener("click", () => {
    const container = document.getElementById("container");

    container.innerHTML += "<p>Newly added text!</p>";
});