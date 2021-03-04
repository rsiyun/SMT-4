import React from 'react';
import {Switch,Route,useRouteMatch } from 'react-router-dom';
import Content from './Content';

const Main = () => {
    const {path} = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${path}/:isi`}>
                    <Content/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;
