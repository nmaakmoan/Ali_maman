document.getElementById("join-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const welcome = document.getElementById("welcome");
    welcome.innerText = "Welcome to the club! You are now a member.";
});