
var navInner = document.getElementsByClassName('nav-inner')[0];
var menu = document.getElementById('menu');
var body = document.getElementsByClassName('body')[0];
var menuBack = document.getElementsByClassName('menuBack')[0];


menu.addEventListener('click', function () {
    navInner.classList.toggle("open");
    menu.classList.toggle("menu-close");
    body.classList.toggle('menuStock');
    menuBack.classList.toggle('open');
    menu.style.backgroundColor='var(--main-color)'

});


// 手機版本下, 點選選單按鈕同步將nav關閉
var navLiInner = document.getElementsByClassName('nav-li-inner');


for (var z = 0; z < navLiInner.length; z++) {
    navLiInner[z].addEventListener('click', MenuCloseMobile);

    function MenuCloseMobile() {
    navInner.classList.remove("open");
    menu.classList.remove("menu-close");
    body.classList.remove('menuStock');
    menuBack.classList.remove('open');
    }
}