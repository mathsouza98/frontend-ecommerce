import React from 'react'
import { Home, Login, Admin, Account, Cart, UserRegistry, OrderPage } from '../pages/index'
import { AdminProtectedRoute, UserProtectedRoute } from './index'
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
          <AdminProtectedRoute exact path="/admin" component={Admin} />
          <UserProtectedRoute exact path="/order" component={OrderPage} />
          {/* <ProtectedRoute exact path="/cart" component={Cart} /> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}
