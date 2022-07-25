let state = document.querySelectorAll(".item__state");
console.log(state)
for(let i=0;i<state.length;i++){
    let zaiko = state[i].innerHTML;
    console.log(zaiko)
    if(zaiko=="true"){
        state[i].innerHTML="在庫有"
    }else{
        state[i].innerHTML="在庫無"
    }
}
