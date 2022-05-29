import { FC, lazy } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { store } from '../stores/index.store';
import {history} from './history';


// Public Routes

const SigninPage = lazy(()=>import ('../pages/SignIn/SigninPage'));

// Private Routes
const HomePage = lazy(()=>import('../pages/HomePages/HomePage'))

//  Routes Definition 

export const publicRoutes =[
  {path: '/signpage', component: <SigninPage/>},
  { path: '*', component: <Redirect to="/signpage" /> },
]

export const privateRoutes=[
  {path: '/homepage', component: <HomePage/>},
  { path: '*', component: <Redirect to="/homepage" /> },
]
export const AppRouter: FC=()=>{
  const { isLoggedIn } = store.application((state)=>state);

  return(
    <Router history={history}>
      <Switch>
        {isLoggedIn && 
          privateRoutes.map((route)=>
          <Route path={route.path} key={route.path} exact>
            {route.component}
          </Route>
          )
        
        }
        {
          !isLoggedIn && publicRoutes.map((route)=>(
            <Route path={route.path} key={route.path} exact>
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </Router>

  )

}