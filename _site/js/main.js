let cont = document.querySelectorAll(".main__content");
console.log(cont.length);

for(let i = 0;i<cont.length;i++){
    if(i>8){
        console.log("表示しません");
        cont[i].classList.add("off");
    }
}

let more = document.querySelector(".main__more");
console.log(more);

more.addEventListener("click" , function(){
    for(let i=0;i<cont.length;i++){
        if(cont[i].classList.contains("off") === true){
            cont[i].classList.toggle("off");
        }
    }
})