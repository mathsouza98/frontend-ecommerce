import React from 'react'
import { Home, Login, Admin, Account, Cart, UserRegistry } from '../pages/index'
import ProtectedRoute from './ProtectedRouter'
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
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/register'>
            <UserRegistry />
          </Route>
          <Route exact path='/account'>
            <Account />
          </Route>
          <Route exact path='/payment'>
            <Account />
          </Route>
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          {/* <ProtectedRoute exact path="/cart" component={Cart} /> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}
