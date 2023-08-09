import searchIcon from  '../../images/icons/search_icon.svg';
import rssIcon from  '../../images/icons/rss_icon.svg';
import logo from  '../../images/logo.png';

export default function header(){

    let header = `<header class="header">
    <a class="logo" href="/">
        <img src="../images/logo.png" />
    </a>
    <div class="header__right">
        <div class="header__text">Информационный Центр Правительства Москвы</div>
        <button class="search-btn_header search-btn_js">
            <img src="../images/icons/search_icon.svg" />
        </button>
        <a class="header__rss" href="/rss">
            <img src="../images/icons/rss_icon.svg" />
        </a>
    </div>
</header>`;

    let wrapper = document.querySelector('.wrapper');
    wrapper.insertAdjacentHTML('afterbegin', header);
}