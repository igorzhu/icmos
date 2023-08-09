import './sass/index.scss';
import './js/app';
import tabs from './js/modules/tabs.js';
import textSlider from './js/modules/text-slider.js';

//Импортируем html-шаблоны на js:
import head from './js/templates/head.js';

//Вставляем html-шаблоны:
head('Главная');

tabs();
textSlider();