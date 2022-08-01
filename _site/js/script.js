const product = document.querySelectorAll(".product__card");
const button = document.querySelector(".button");
let count = 0;
product[9].classList.add("product__card-hidden");

button.addEventListener("click", () => {
    product[9].classList.toggle("product__card-hidden");
    count++
    if (count % 2 !== 1) {
        button.innerText = "More";
    } else {
        button.innerText = "Close";
    }
});
