import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  const user = {
    name: 'Kate Larson',
    birthday: 'Date of Birth: 3 April',
    address: 'City: Moscow',
    education: 'Education: MSU',
    web: 'https://github.com/pmsgng'
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent user={user} />
    </div>
  );
}

export default App;
