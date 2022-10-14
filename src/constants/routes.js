import Login from '../views/Login';
import Register from '../views/Register';
import About from '../views/About';
import Home from '../views/Home';

const AuthorizedStatus = Object.freeze({
  AUTHORIZED: 'authorized',
  UNAUTHORIZED: 'unauthroized',
  IRRELEVANT: 'irrelevant'
})

const RouteMap = {
  About: {
    path: 'about',
    component: <About />,
    requiredAuth: AuthorizedStatus.IRRELEVANT
  },
  Login: {
    path: 'login',
    component: <Login />,
    requiredAuth: AuthorizedStatus.UNAUTHORIZED
  },
  Register: {
    path: 'register',
    component: <Register />,
    requiredAuth: AuthorizedStatus.UNAUTHORIZED
  },
  Home: {
    path: '/',
    component: <Home />,
    requiredAuth: AuthorizedStatus.IRRELEVANT
  }
}

export { RouteMap, AuthorizedStatus };