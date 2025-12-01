const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");

    const maxX = container.offsetWidth - noButton.offsetWidth;
    const maxY = container.offsetHeight - noButton.offsetHeight;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    noButton.style.left = randX + "px";
    noButton.style.top = randY + "px";
});
