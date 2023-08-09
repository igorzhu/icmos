//import $ from "jquery"; // не нужно, т.к. подключаем jquery глобально в webpack.config.js


export default function firstLetter() {

    $(document).ready(function(){
        let firstParagraph = $('.article__text > p:first-child'),
            firstParagraphText = firstParagraph.html(),
            firstSymbol = firstParagraphText.slice(0, 1),
            firstLetter,
            otherText,
            beforeText;

        if(firstSymbol ==="<") {
            // Если абзац начинается с дочернего элемента типа <strong>, <i> и т.п.
            let closingTegPos = firstParagraphText.match(/>/).index;
            firstLetter = firstParagraphText.slice(closingTegPos + 1, closingTegPos + 2);
            beforeText = firstParagraphText.slice(0, closingTegPos + 1);
            otherText = firstParagraphText.slice(closingTegPos + 2);
        } else {
            firstLetter = firstSymbol;
            beforeText = '';
            otherText = firstParagraphText.slice(1);
        }

        let firstLetterEl = '<span class="first-letter">' + firstLetter + '</span>',
            resultText = beforeText + firstLetterEl + otherText;

        firstParagraph.empty().append(resultText);

    });
}
