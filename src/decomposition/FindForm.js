import { staticNews } from './defines';

/*
* Функция для отображения поиска по сайту
*/
function FindForm() {
  return (
    <form>
      <div className="find_form">
        <input type="text"/>
        <button>Поиск</button>
      </div>
    </form>
  );
}
export default FindForm;
