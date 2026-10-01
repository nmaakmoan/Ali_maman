document.getElementById("check-btn").addEventListener("click", () => {
    const userInput = Number(document.getElementById("guess-input").value);
    const feedback = document.getElementById("feedback");
    const secretNum = 7;

    if (userInput === secretNum) {
        feedback.innerText = "Correct! You win!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong! Try again.";
        feedback.style.color = "red";
    }
});