//import $ from "jquery"; / не нужно, т.к. подключаем jquery глобально в webpack.config.js

export default function tabs() {

    $('body').on('click', '.tab-btn-js', function (e) {

        e.preventDefault();

        $(this).parents('.tab-links-js').find('.tab-btn-js').removeClass('active');
        $(this).addClass('active');

        let tab = $("." + $(this).data('tab'));

        $('.tab').removeClass('show-tab');
        tab.addClass('show-tab');
    });
}

/*export default {
    init
}*/
