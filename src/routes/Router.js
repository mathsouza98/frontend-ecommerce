import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import UserRegistry from '../pages/UserRegistry'
import Cart from '../pages/Cart'
import CartNew from '../pages/CartNew'

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
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/cart'>
            <CartNew />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/cadastro'>
            <UserRegistry />
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
