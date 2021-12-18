import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Home from './Components/Home'
import LoginForm from './Components/Login'
import SignUp from './Components/SignUp'

import NotFound from './Components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
