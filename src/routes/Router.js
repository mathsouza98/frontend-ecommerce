import React from 'react'
import { Home, Login, Admin, Account, Cart, UserRegistry, ProductScreen, Order, OrderError, Bill, Users, SubmitRoleBasedUserForm } from '../pages/index'
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
          <AdminProtectedRoute exact path="/admin/users" component={Users} />
          <AdminProtectedRoute exact path="/admin/users/submit" component={SubmitRoleBasedUserForm} />
          <UserProtectedRoute exact path="/order" component={Order} />
          <UserProtectedRoute exact path="/order/500" component={OrderError} />
          <UserProtectedRoute exact path="/bill/:orderId" component={Bill} />
          <UserProtectedRoute exact path="/product/:productId" component={ProductScreen} />
          {/* <ProtectedRoute exact path="/cart" component={Cart} /> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}
