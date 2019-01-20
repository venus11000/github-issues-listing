import React from 'react';
import Home from '../Home/index';
import Header from '../../components/header';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import RepoInDetail from '../RepositoryInDetail';

export default class App extends React.Component {
    render() {
        return (<div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:userName' component={(params) => <Dashboard userName={params.match.params.userName}/>} />
                <Route exact path='/:userName/:repoName' component={(params) => <RepoInDetail userName={params.match.params.userName} repoName={params.match.params.repoName}/>} />
            </Switch>
        </div>);
    }
}