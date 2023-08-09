export default function footer(){

    let footer = `<footer class="footer">
  <nav class="footer__menu">
    <ul>
      <li>
        <a href="https://duma.mos.ru/" target="_blank">Московская Городская Дума</a>
      </li>
      <li>
        <a href="https://www.mos.ru/" target="_blank">Правительство Москвы</a>
      </li>
      <li>
        <a href="https://www.mos.ru/mayor/themes/" target="_blank">Мэр Москвы</a>
      </li>
      <li>
        <a href="https://www.mos.ru/uslugi/" target="_blank">Государственные услуги Москвы</a>
      </li>
      <li>
        <a href="http://www.mosgorizbirkom.ru/" target="_blank">Мосгоризбирком</a>
      </li>
    </ul>
  </nav>
  <div class="footer__bottom">
    <a class="footer__link" href="/redaction">О сайте</a>
    <a class="footer__link" href="/contacts">Контакты</a>
    <div class="footer__redaction">
      <span class="footer__text">Редакция:</span>
      <a class="footer__tel" href="tel:+79037960615">+7 (903) 796-06-15</a>
    </div>
    <div class="footer__socials">
      <a href="https://vk.com/icmosru" target="_blank">
        <img src="../images/icons/vk_black.svg" />
      </a>
      <a href="https://www.youtube.com/user/icmosru" target="_blank">
        <img src="../images/icons/youtube_black.svg" />
      </a>
      <a href="https://ok.ru/group/53238978904252" target="_blank">
        <img src="../images/icons/ok_black.svg" />
      </a>
      <a href="https://ok.ru/group/53238978904252" target="_blank">
        <img src="../images/icons/tg_black.svg" />
      </a>
    </div>
  </div>
</footer>`;

    $('body').append(footer);
}