import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

      </Router>
    </div>
  );
}

export default App;
