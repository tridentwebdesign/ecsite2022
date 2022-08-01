const image = document.querySelectorAll(".single__item img");
const imageMain = document.querySelector(".single__image-main img");

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
        imageMain.src = image[i].src;
    })
}