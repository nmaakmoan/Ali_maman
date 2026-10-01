document.getElementById("count-btn").addEventListener("click", () => {
    const inputField = document.getElementById("username");

    const text = inputField.value;

    document.getElementById("char-count").innerText = text.length;
});