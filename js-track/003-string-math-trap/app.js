document.getElementById("calc-btn").addEventListener("click", () => {
    const val1 = Number(document.getElementById("num1").value);
    const val2 = Number(document.getElementById("num2").value);

    const total = val1 + val2;

    document.getElementById("result").innerText = total;
});