var menu = document.getElementById('menu');
var Ybtn = document.getElementById('Ybtn');
var Nbtn = document.getElementById('Nbtn');

Ybtn.addEventListener('click', function(){
    var random = Math.floor(Math.random() * arr.length);

    // 동일 카테고리 상품을 추천한다
})

Nbtn.addEventListener('click', function(){
    var random = Math.floor(Math.random() * arr.length);

    //다른 카테고리 상품을 추천한다

    menu.textContent = arr[random].quote;
})