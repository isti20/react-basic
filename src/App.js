import ComponentJSX from './components/ComponentJsx';
import WithoutJSX from './components/WithoutJsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentJSX />
        <WithoutJSX />
      </header>
    </div>
  );
}

export default App;
