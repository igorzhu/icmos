
export default function menu(){

    let menu = `<nav class="menu">
    <div class="menu__header">
        <form>
            <input class="search" type="text" />
            <button class="search-btn">
                <img src="../../images/icons/search_icon.svg" />
            </button>
        </form>
        <button class="menu__close">
            <img src="../../images/icons/close_menu.svg" />
        </button>
    </div>
    <ul class="menu__list">
        <li>
            <a href="#">Новости</a>
        </li>
        <li>
            <a href="#">Пресс-конференции</a>
        </li>
        <li>
            <a href="#">Анонсы</a>
        </li>
        <li>
            <a href="#">Комментарии</a>
        </li>
        <li>
            <a href="#">Власть и город</a>
        </li>
        <li>
            <a href="#">Жизнь в городе</a>
        </li>
        <li>
            <a href="#">Медиа</a>
        </li>
    </ul>
    <div class="menu__socials">
        <div class="menu__socials-text">Мы в соцсетях</div>
        <div class="menu__socials">
            <a href="https://vk.com/icmosru" target="_blank">
                <img src="../../images/icons/vk_black.svg" />
            </a>
            <a href="https://www.youtube.com/user/icmosru" target="_blank">
                <img src="../../images/icons/youtube_black.svg" />
            </a>
            <a href="https://ok.ru/group/53238978904252" target="_blank">
                <img src="../../images/icons/ok_black.svg" />
            </a>
            <a href="https://ok.ru/group/53238978904252" target="_blank">
                <img src="../../images/icons/tg_black.svg" />
            </a>
        </div>
    </div>
</nav>`;

    $('body').prepend(menu);
}
