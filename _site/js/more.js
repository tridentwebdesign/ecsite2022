let wrap = document.querySelectorAll(".item__wrap");
console.log(wrap);
let btn = document.querySelector(".item__btn");

for(let i = 6; i<wrap.length ; i++){
    wrap[i].classList = "none";
}

btn.addEventListener("click",function(){
    for(let i = 6; i< wrap.length ; i++){
        wrap[i].classList.remove("none");
        wrap[i].classList = "item__wrap";
    }

    btn.classList = "none";
})
