import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAbonnes from './components/ListAbonnes';
import Header from './components/Header';
import Footer from './components/Footer';
import AddAbonne from './components/AddAbonne';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>


      <Router>
        <div className="container">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ListAbonnes}></Route>
              <Route exact path="/abonnes" component={ListAbonnes}></Route>
              <Route exact path="/addAbonne" component={AddAbonne} />


            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
