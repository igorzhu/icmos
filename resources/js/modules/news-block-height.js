//import $ from "jquery"; // не нужно, т.к. подключаем jquery глобально в webpack.config.js


function init() {
    window.onload = function (){
        setNewsBlockHeight();
        resize();
    }
}

function setNewsBlockHeight(){
    let mainSide = $('.news-height-js'),
        newsSide = $('.news-block__inner'),
        mainSideH = mainSide.height();
    let winW = window.innerWidth;

    if (winW > 900) {
        newsSide.height(mainSideH);
    } else {
        newsSide.height('auto');
    }
}

function resize(){

    window.addEventListener("resize", setNewsBlockHeight);
}

export default {
    init
}