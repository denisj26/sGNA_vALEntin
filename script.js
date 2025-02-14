document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");
    const botonNo = document.getElementById("botonNo");
    const botonSi = document.getElementById("botonSi");
    const descargar = document.getElementById("descargar");

    // Ocultar el botón de descarga desde el inicio
    descargar.style.display = "none";

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 100);

    // Hacer que el botón "No" se mueva al pasar el mouse
    botonNo.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - botonNo.offsetWidth - 20; 
        const maxY = window.innerHeight - botonNo.offsetHeight - 20; 

        let x, y;

        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
        } while (
            Math.abs(x - botonSi.offsetLeft) < 100 && 
            Math.abs(y - botonSi.offsetTop) < 50
        );

        botonNo.style.position = "absolute";
        botonNo.style.left = `${x}px`;
        botonNo.style.top = `${y}px`;
    });

    // Al hacer clic en "Sí", mostrar mensaje en lugar de descargar archivo
    botonSi.addEventListener("click", function () {
        alert("¡Sabía que dirías que sí! Te veo en la tarde. ❤️");
    });
});

