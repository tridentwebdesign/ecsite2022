let item = document.querySelectorAll(".products__item");
let a = 0;
let btn = document.querySelector(".products__btnA");
item[item.length-1].classList.add("remove");

btn.addEventListener("click",function(){
    if(a == 0){
        item[item.length-1].classList.remove("remove");
        a = 1;
        btn.innerText="close";
    }else{
        item[item.length-1].classList.add("remove");
        a = 0;
        btn.innerText="view more";
    }
});

