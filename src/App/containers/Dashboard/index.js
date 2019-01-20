import React from 'react';

export default class Dashboard extends React.Component {
    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem("USER")));
    }
    render() {
        return (
            <div>
                Dashboard
            </div>
        );
    }
}