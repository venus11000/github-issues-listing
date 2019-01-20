import React from 'react';
import Home from '../Home/index';
import Header from '../../components/header';
import { Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (<div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                {/* both /roster and /roster/:number begin with /roster */}
                {/* <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} /> */}
            </Switch>
        </div>);
    }
}