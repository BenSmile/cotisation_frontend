import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAbonnes from './components/ListAbonnes';
import ListOperations from './components/ListOperations';
// import Header from './components/Header';
import Header from './layers/Header';

import Footer from './components/Footer';
import AddAbonne from './components/AddAbonne';

import AddOperation from './components/AddOperation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './layers/Menu';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>


      <Router>
        <div className="">
          <Header />
          <Menu />
          <Footer />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>


              <Route exact path="/abonnes" component={ListAbonnes}></Route>
              <Route exact path="/addAbonne" component={AddAbonne} />
              <Route exact path="/updateAbonne/:telephone" component={AddAbonne} />

              <Route exact path="/operations" component={ListOperations}></Route>
              <Route exact path="/comptes" component={ListAbonnes}></Route>

              <Route exact path="/addOperation" component={AddOperation} />
              <Route exact path="/updateoperation/:numOperation" component={AddOperation} />


            </Switch>
          </div>

          <Footer />
        </div>
      </Router>


    </div>
  );
}
export default App;
