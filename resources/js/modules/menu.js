import $ from "jquery";

export function menu() {

    $('body').on('click', '.burger', function (e) {
        $('.menu').addClass('menu_show');
        $('html').addClass('noscroll');
    });

    $('body').on('click', '.menu__close', function (e) {
        $('.menu').removeClass('menu_show');
        $('html').removeClass('noscroll');
    });
}

/*export default {
    init
}*/
