document.getElementById("show-id").addEventListener("click", () => {
    const info = document.getElementById("user-info");

    const id = info.dataset.userId;

    console.log("The ID is: " + id);
    alert("Check console for ID: " + id);
});