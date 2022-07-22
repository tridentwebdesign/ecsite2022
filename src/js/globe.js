console.log("a");
let big = document.querySelector(".big");
let small = document.querySelectorAll(".small");

console.log(big);
console.log(small);

for(let i =0;i<small.length; i++){
    small[i].addEventListener("click",function(){
big.setAttribute("src",small[i].src);
    })
}