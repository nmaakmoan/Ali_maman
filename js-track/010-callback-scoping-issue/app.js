document.getElementById("start-btn").addEventListener("click", function() {
    const name = "Developer";

    setTimeout(function() {
        document.getElementById("msg").innerText = "Hello, " + name;
    }, 1000);
});