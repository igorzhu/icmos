import '../sass/index.scss';

//Импортируем html-шаблоны на js:
import menu from './templates/menu.js';
import footer from './templates/footer.js';
import header from './templates/header.js';
import search from './templates/search.js';

//Импортируем модули:
import {showMenu} from './modules/showMenu.js';
import newsBlockHeight  from './modules/news-block-height.js'; // При export default, если имя при экспорте не указано, можно импортировать объект под любым именем, и переменная с данным именем будет содержать в себе экспортируемый объект
//https://stackoverflow.com/questions/61741162/what-does-mean-export-default-without-name
import searchBlock from './modules/search-block.js';

console.log('common.js');

//Вставляем html-шаблоны:
header();
menu();
search();
footer();

//Вызываем модули:
newsBlockHeight.init();
showMenu();
searchBlock();


