// import logo from './logo.svg';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/booking/:serviceId'>
            <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}





export default App;
