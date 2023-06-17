import './App.css';
import Header from './components/Header';
import Maincontent from './components/Maincontent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Maincontent />
    </div>
  );
}

export default App;
