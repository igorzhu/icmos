import $ from "jquery";


function init() {

    $(document).ready(function(){
        $('.aif_shares_js').aifShares({providers: ['vk', 'ok', 'tg']}
        );
    });
}

export default {
    init
}