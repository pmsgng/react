import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
