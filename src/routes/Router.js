import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Product from '../pages/Product'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/admin'>
            <Admin />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
