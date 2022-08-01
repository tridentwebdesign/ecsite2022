let aa = document.querySelectorAll(".products__sell")
for(let i=0;i<aa.length;i++){
    let text = aa[i].innerHTML;
    if(text =="true"){
        // aa[i].innerHTML="在庫有"
        aa[i].remove();
    }else{
        aa[i].innerHTML="sold out"
    }
}
let imglist = document.querySelectorAll(".products__imglist")
let mainimg = document.querySelector(".products__mainimg");
for(let i=0;i<imglist.length;i++){
    imglist[i].addEventListener("click",function(){
        let code = imglist[i].getAttribute("src");
        mainimg.setAttribute("src",code)
    })
}

