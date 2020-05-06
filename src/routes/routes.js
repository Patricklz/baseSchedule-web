import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './auth';

import SignIn from '~/pages/SignIn/signIn-index';
import SignUp from '../pages/SignUp/signUp-index';

import Dashboard from '../pages/Dashbord/dashboard-index';
import Profile from '../pages/Profile/profile-index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" exact component={SignUp} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    )
}