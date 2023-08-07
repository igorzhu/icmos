import $ from "jquery";

console.log('menu.js');

function init() {

    console.log('menu init');


    $('body').on('click', '.burger', function (e) {
        $('.menu').addClass('menu_show');
        $('html').addClass('noscroll');
    });

    $('body').on('click', '.menu__close', function (e) {
        $('.menu').removeClass('menu_show');
        $('html').removeClass('noscroll');
    });
}

export default {
    init
}
