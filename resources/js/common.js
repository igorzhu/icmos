import '../sass/index.scss';

//Импортируем html-шаблоны на js:
import menu from './templates/menu.js';

//Импортируем модули:
import {showMenu} from './modules/showMenu.js';
import newsBlockHeight  from './modules/news-block-height.js'; // При export default, если имя при экспорте не указано, можно импортировать объект под любым именем, и переменная с данным именем будет содержать в себе экспортируемый объект
//https://stackoverflow.com/questions/61741162/what-does-mean-export-default-without-name
import searchBlock from './modules/search-block.js';

console.log('common.js');

menu();

newsBlockHeight.init();
showMenu();
searchBlock();


