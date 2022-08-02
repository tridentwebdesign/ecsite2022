$(function () {
// もっと見るボタン

    let showNum = 4, // 最初に表示しておく件数
         addNum = 2,  // クリックごとに表示したい件数
         target = '.main__goods__item.gitem',
         btn = $('.btn-more');
    
     $(target + ':nth-child(n + ' + (showNum + 1) + ')').addClass('is-hidden');
    
     btn.on('click', function () {
       $(target + '.is-hidden').slice(0, addNum).removeClass('is-hidden').addClass('is-show'); // アニメーション用にis-showクラスを追加
      
       if ($(target + '.is-hidden').length == 0) {
         btn.fadeOut();
       }
     });
    
    // 画像切替
    $(".simg ul li").click(function(){
        $(".main__visaul").children('img').attr("src",$(this).children("img").attr('src'));
    });

    // カートに追加
    let num = 0;
    $(".buy__btn__p").click(function(){
        $(".cart").css({
            "font-size": "14px",
            "position": "absolute",
            "background-color": "#f00",
            "color": "#fff",
            "top": "22px",
            "right": "22px",
            "width": "18px",
            "height": "18px",
            "border-radius": "50%",
            "padding": "(4em/14)",
            "z-index": "1000px",
            "text-align": "center",
            "vertical-align": "bottom",
        })
        $(".cart").text(num++);
    })
})