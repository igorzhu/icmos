import searchIcon from  '../../images/icons/close_white.svg';

export default function search(){

    let search = `<div class="search-section">
          <div class="search-block">
            <input type="text" class="search-field" placeholder="Поиск" />
            <button class="search-close">
              <img src="../images/icons/close_white.svg" />
            </button>
          </div>
        </div>`;

    let menu = document.querySelector('.menu');
    menu.insertAdjacentHTML('afterend', search);
}