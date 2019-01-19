import React from 'react';
import LogIn from '../LogIn';
import Dashboard from '../Dashboard';

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
            <div>
                {!localStorage.getItem("USER") ? <LogIn /> : <Dashboard />}
            </div>
        );
    }
}