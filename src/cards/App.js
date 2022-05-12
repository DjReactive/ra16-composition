import logo from '../logo.svg';
import './App.css';
import Card from './Card'
import { cards } from './defines'
import { nanoid } from 'nanoid';
//import PropTypes from 'prop-types';
//import CardModel from './models/CardModel';

function App() {
  return (
    <Content />
  );
}

const Content = () => {
  return (
    <div className="card-group">
      { cards.map(o => o.visible && <Card item={o} key={nanoid()} />) }
    </div>
  );
}

//Card.propTypes = {
//  item: PropTypes.instanceOf(CardModel)
//}

export default App;
