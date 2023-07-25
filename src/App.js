import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

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
      <Footer />
    </div>
  );
}

export default App;
