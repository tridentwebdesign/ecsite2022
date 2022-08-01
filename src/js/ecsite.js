let state = document.querySelectorAll(".item__state");
let rababanstate = document.querySelectorAll(".rababan__state")
let rnumber = document.querySelectorAll(".rababan__kazu");
let rbutton = document.querySelectorAll(".rababan__button")
console.log(rababanstate)
for(let i=0;i<state.length;i++){
    let zaiko = state[i].innerHTML;
    console.log(zaiko)
    if(zaiko=="true"){
        state[i].innerHTML="在庫有"
        state[i].setAttribute("style","color:blue")
    }else if(zaiko=="false"){
        state[i].innerHTML="在庫無";
        state[i].setAttribute("style","color:red")
    }else{
        state[i].innerHTML="在庫残りわずか";
        state[i].setAttribute("style","color:#ff9500")
    }
}
for(let i=0;i<rababanstate.length;i++){
    let rababanzaiko = rababanstate[i].innerHTML;
    if(rababanzaiko=="true"){
        rababanstate[i].innerHTML="在庫有";
        rababanstate[i].setAttribute("style","color:blue")
    }else if(rababanzaiko=="false"){
        rababanstate[i].innerHTML="申し訳ございません。終了しました。";
        rababanstate[i].setAttribute("style","color:red");
        rnumber[i].setAttribute("style","display:none");
        rbutton[i].setAttribute("style","background-color:red")
        rbutton[i].innerHTML="終了しました"
    }else{
        rababanstate[i].innerHTML="残り数が少なくなっております。"
        rababanstate[i].setAttribute("style","color:#ff9500")
    }
}

let imglist = document.querySelectorAll(".rababan__imgitem")
let mainimg = document.querySelector(".rababan__img")
console.log(imglist)
for(let i=0;i<imglist.length;i++){
    imglist[i].addEventListener("click",function(){
        let code = imglist[i].getAttribute("src")
        mainimg.setAttribute("src",code)
    })
}
let view = document.querySelectorAll(".item__link");
console.log(view)
for(let i=9;i<view.length;i++){
    view[i].classList.add("hyouzi");
    console.log(view[i])
    if(view[i].classList.contains('hyouzi') == true){
        view[i].setAttribute("style","display:none")
        console.log(view[i])
    }
}
let button = document.querySelector(".main__viewbutton")
button.addEventListener("click",function(){
   button.classList.toggle('move')
   if(button.classList.contains('move')==true){
       console.log("テスト")
    for(let i= 9;i<view.length;i++){
        view[i].setAttribute("style","display:block");
    }
   }else{
    for(let i= 9;i<view.length;i++){
        view[i].setAttribute("style","display:none");
    }
   }
    
})