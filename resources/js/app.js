import { arrNew } from "../db/db-new";

// const data = fetch('http://fjdkslfjkds.fjdfj.ru', {
//   method: 'GET',
//   data: 'hjkhjk'
// });

const newsList = document.querySelector('ul.news-block__list');

arrNew.forEach(elem => {
  const itemLi = document.createElement('li');
  itemLi.insertAdjacentHTML('beforeend',
  `<time>${elem.time}</time>
    <a href="./news.html">
      <span>${elem.title}</span>
    </a>
  `
  )
  console.log(itemLi);
  newsList.append(itemLi);


});


