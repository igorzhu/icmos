import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel";

export default function textSlider() {

    let winW = window.innerWidth;

    let isMobile = false;

    if (winW < 700) {

        isMobile = true;

        setTextSlider();
    }

    window.addEventListener("resize", function(){
        winW = window.innerWidth;

        if (winW < 700 && !isMobile){
            isMobile = true;
            setTextSlider();
        } else if (winW > 700 && isMobile) {
            isMobile = false;
            removeTextSlider();
        }
    });
}

function setTextSlider(){

    window.textSlider = $(".text-slider-js");
    console.log('setTextSlider is working');

    $(document).ready(function(){
        window.textSlider.owlCarousel({
            items:4,
            nav: true,
            //autoWidth: true,
            responsive : {
                0 : {
                    items:2,
                    autoWidth: true
                },
                420 : {
                    items:2,
                    autoWidth: true
                },
                // breakpoint from 580 up
                580 : {
                    items:3,
                    autoWidth: true
                },
                // breakpoint from 700 up
                700 : {
                    items:5
                }
            }
        });
    });
}

function removeTextSlider(){

    window.textSlider.trigger('destroy.owl.carousel');
}


/*export default {
    init
}*/
