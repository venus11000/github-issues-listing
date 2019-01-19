import React from 'react';
import LogIn from '../LogIn';
import Dashboard from '../Dashboard';
import './style.scss';

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="">
                {!localStorage.getItem("USER") ? <LogIn /> : <Dashboard />}
            </div>
        );
    }
}