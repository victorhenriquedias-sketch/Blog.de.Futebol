const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        temaBtn.textContent = "☀️";

    } else {

        temaBtn.textContent = "🌙";

    }

});
