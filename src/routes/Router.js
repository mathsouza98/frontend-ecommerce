import React from 'react'
<<<<<<< HEAD
import { Home, Login, Admin, Products, Product } from '../pages/index'
import ProtectedRoute from './ProtectedRouter'
=======
import Home from '../pages/Home'
import Login from '../pages/Login'
import UserRegistry from '../pages/UserRegistry'
import Cart from '../pages/Cart'

import Admin from '../pages/Admin'

>>>>>>> 3831fc638f74c6e9c4ec94a087efe5031ea02c24
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
<<<<<<< HEAD
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} />
=======
          <Route exact path='/admin'>
            <Admin />
          </Route>
>>>>>>> 3831fc638f74c6e9c4ec94a087efe5031ea02c24
        </Switch>
      </BrowserRouter>
    </>
  )
}
