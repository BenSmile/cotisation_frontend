import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAbonnes from './components/ListAbonnes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ListAbonnes />
      </div>
      <Footer/>
    </div>

  );
}

export default App;
