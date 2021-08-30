import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import  Dashboard  from '../pages/dashboard/dashboard';
import  Details  from '../pages/actionDetails/details';

export const DashboardRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/dashboard" component={ Dashboard }/>
                <Route exact path="/Details/:symbol" component={ Details }/>
                <Redirect to="/dashboard"/>
            </Switch>
        </div>
    )
}
