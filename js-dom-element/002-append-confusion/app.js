document.getElementById("add-item").addEventListener("click", () => {
    const list = document.getElementById("shopping-list");

    const newItem = document.createElement("li");
    newItem.innerText = "Bread";

    list.appendChild(newItem);
});