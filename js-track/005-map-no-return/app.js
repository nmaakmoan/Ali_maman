const todos = ["Buy Milk", "Walk Dog", "Code fix"];
const list = document.getElementById("todo-list");

const htmlItems = todos.map(todo => {
    return `<li>${todo}</li>`;
});

list.innerHTML = htmlItems.join("");