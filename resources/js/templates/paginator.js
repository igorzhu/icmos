export default function paginator(elem, where){

    let paginator = `<div class="paginator">
            <button class="paginator__btn paginator__btn_l paginator__btn_disabled"></button>
            <span class="paginator__text">СТРАНИЦА 1 ИЗ 11004</span>
            <button class="paginator__btn paginator__btn_r"></button>
        </div>`;

    elem.insertAdjacentHTML(where, paginator);
}