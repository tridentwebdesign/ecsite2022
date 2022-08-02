let imglist = document.querySelectorAll(".goods__images");
let imgmain = document.querySelector(".goods__main-img");
for (let i = 0; i < imglist.length; i++) {
    imglist[i].addEventListener("click", function () {
        let code = imglist[i].getAttribute("src");
        imgmain.setAttribute("src", code)
    });
}