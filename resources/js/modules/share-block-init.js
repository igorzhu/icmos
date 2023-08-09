export default function shareBlockInit() {

    $(document).ready(function(){
        $('.aif_shares_js').aifShares({providers: ['vk', 'ok', 'tg']}
        );
    });
}
