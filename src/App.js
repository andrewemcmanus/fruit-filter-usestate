import logo from './logo.svg';
import './App.css';
import FruitContainer from './components/FruitContainer';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'pomengranate', 'grapefruit', 'mango', 'raspberry', 'blackberry', 'strawberry', 'kiwi'];
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
