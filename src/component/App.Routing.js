import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard.Component';
import { New } from './NewComponent/NewComponent';
import { Hire } from './Hire/Hire.component';

export const AppRouting = () => {
    return (
        <Switch>
            <Route exact path="/hire_me" component={Hire} />
            <Route exact path="/about" component={New} />
            <Route exact path="/service" component={New} />
            <Route exact path="/skills" component={New} />
            <Route exact path="/" component={New} />
            <Route exact path="/contact" component={Dashboard} />
            <Route exact path="/home" component={New} />
            <Route exact path="/teams" component={New} />
        </Switch>
    );
};
