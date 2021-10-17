import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Route ></Route>

      </Router>
    </div>
  );
}

export default App;
