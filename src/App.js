
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            <PrivateRoute path="/service/:name">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
