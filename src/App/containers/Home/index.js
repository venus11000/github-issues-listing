import React from 'react';
import LogIn from '../LogIn';
import Dashboard from '../Dashboard';
import './style.scss';

export default class Home extends React.PureComponent {
    render() {
        return (
            <div className="">
                <LogIn />
            </div>
        );
    }
}