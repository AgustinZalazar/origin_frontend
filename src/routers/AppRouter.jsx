import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Login } from '../pages/login/Login';
import { Dashboard } from '../pages/dashboard/dashboard';

export const AppRouter = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={ Dashboard }/>
                    <Route exact path="/login" component={ Login }/>
                </Switch>
        </Router>
    )
}