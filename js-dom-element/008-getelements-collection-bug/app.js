document.getElementById("color-all").addEventListener("click", () => {
    const paras = document.getElementsByClassName("highlight");

    for (let i = 0; i < paras.length; i++) {
        paras[i].style.backgroundColor = "yellow";
    }
});