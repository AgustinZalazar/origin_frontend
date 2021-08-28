import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { Login } from '../pages/login/Login';
import  Dashboard  from '../pages/dashboard/dashboard';
import useUser from '../hooks/useUser';

export const AppRouter = () => {
    const {isLogged} = useUser()
    return (
        <Router>
            {isLogged?
               (
                    <Switch>
                        <Route exact path="/" component={ Dashboard }/>
                        <Redirect to="/" />
                    </Switch>
                ) 
                :
                (
                    <Switch>
                        <Route exact path="/login" component={ Login }/>
                        <Redirect to="/login" />
                    </Switch>
                )
            }
        </Router>
    )
}