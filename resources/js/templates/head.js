export default function head(title){

    let headContent = `<meta charset="UTF-8">
            <title>${title}</title>
            <link rel="shortcut icon" href="/favicon.ico">
            <link rel="icon" href="/favicon.ico">
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="HandheldFriendly" content="true">
        
            <!--[if lt IE 9]>
            <script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
            <!--[if lt IE 10]>
            <script type="text/javascript" src="http://stat.aif.ru/js/css3-multi-column.js"></script><![endif]-->
            <!--link rel="stylesheet" type="text/css" href="../css/style.css" /-->`;

    //$('html').prepend(head);
    document.head.insertAdjacentHTML('afterbegin', headContent);
}
