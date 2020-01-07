import React from 'react';
import MiddleWare from './component/MiddleWare'
import ProductRegister from './component/ProductRegister'
import PromotionalPage from './component/PromotionalPage'
import Nav from './component/NavBar/Nav'
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import Success from './component/Success'
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import AllInfo from './component/AllInfo';



class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route path='/admin' component={MiddleWare}/>
          <Route path='/success' component={Success}/>
          <Route path='/all' component={AllInfo}/>
          <Route path='/register' component ={Register}/>
          <Route path='/login' component ={Login}/>
          <Route path="/promotional" component={PromotionalPage}/>
          <Route path='/' exect={true} component={ProductRegister}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
