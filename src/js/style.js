let slide = document.querySelectorAll(".item__slide");
console.log(slide[0].src);
let main= document.querySelector(".item__img");
console.log(main);


slide.forEach(element => {
    element.addEventListener("click",function(){
        main.src = element.src;
    })
});