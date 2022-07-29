console.log("a");
let big = document.querySelector(".big");
let small = document.querySelectorAll(".small");

console.log(big);
console.log(small);


let statas = document.querySelectorAll(".statas")
for(let i=0;i<statas.length;i++){
    let check = statas[i].innerHTML;
    console.log(check)
    if(check=="true"){
        statas[i].innerHTML="在庫あり"
    }else{
        statas[i].innerHTML="在庫なし"
    }
}

for(let i =0;i<small.length; i++){
    small[i].addEventListener("click",function(){
big.setAttribute("src",small[i].src);
    })
};


let list =document.querySelectorAll(".main__box");
for(let i=9;i<list.length;i++){
    list[i].setAttribute("style","display:none")
};
let view = document.querySelector(".button");
console.log(view);
view.addEventListener("click",function(){
    view.classList.toggle("move")
    if(view.classList.contains('move')==true){
        for(i=9;i<list.length;i++){
            list[i].setAttribute("style","display:block")
        }
    }else{
        for(i=9;i<list.length;i++){
            list[i].setAttribute("style","display:none")
        }
    }
})
