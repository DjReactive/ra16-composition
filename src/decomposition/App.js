import logo from '../logo.svg';
import './App.css';
import News from './News';
import FindForm from './FindForm';
import Footer from './Footer';

function App() {
  return (
    <Content />
  );
}

const Content = () => {
  return (
    <div className="content">
      <News count={5} />
      <FindForm />
      <Footer />
    </div>
  );
}

export default App;
