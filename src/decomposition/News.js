import { staticNews } from './defines';
import { nanoid } from 'nanoid';

/*
* Функция для отображения блока с заголовками новостей
*/
function News({count}) {
  let arr = [];
  staticNews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach((o, idx) => idx < count && arr.push(o));
  return (
    <ul className="news">
      { arr.map(o => <NewsItem item={o} key={nanoid()} />) }
    </ul>
  );
}

const NewsItem = ({item}) => {
  return (
    <li>
      <a href={ item.url }>
        <img src={ item.icon } />
        <span>{ item.desc_short } ({ item.date })</span>
      </a>
    </li>
  );
}

export default News;
