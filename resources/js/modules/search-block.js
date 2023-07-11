import $ from "jquery";


function init() {

    $('body').on('click', '.search-btn_js', function(){
        //$('.search-section').addClass('show');
        $('.search-section').fadeIn();
    });

    $('body').on('click', '.search-close', function(){
        //$('.search-section').removeClass('show');
        $('.search-section').fadeOut();
    });

}

export default {
    init
}