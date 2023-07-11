import $ from "jquery";
import "owl.carousel";

function init() {
    setTextSlider();
}

function setTextSlider(){

    window.photoSlider = $(".photo-slider-js");

    $(document).ready(function(){
        window.photoSlider.owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            rewind: false,
            navSpeed: 800
        });
    });
}

export default {
    init
}
