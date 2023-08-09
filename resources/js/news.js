console.log('page start news js');

//Импортируем html-шаблоны на js:
import head from './templates/head.js';
import paginator from './templates/paginator.js';

//Вставляем html-шаблоны:
//head('Новости');
let main = document.querySelector('main');
paginator(main, 'beforeend');