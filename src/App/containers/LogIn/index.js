import React from 'react';
import './style.scss';
import Logo from '../../../images/logo.png';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            errorUserName: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkValidUserOrNot = this.checkValidUserOrNot.bind(this);
    }
    handleChange(event) {
        this.setState({ userName: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.userName) {
            this.checkValidUserOrNot(this.state.userName);
        } else {
            this.setState({ errorUserName: "Please provide username..." });
        }
    }
    checkValidUserOrNot(userName) {
        fetch(`https://api.github.com/users/${userName}`)
        .then((response) =>  {
            if(response.status === 200) {
                return response.json();
            }
        })
        .then((data) =>{
            if(data) {
                this.setState({ errorUserName: "" });
                localStorage.setItem("USER", JSON.stringify(data));
            }  else {
                this.setState({ errorUserName: "Invalid Username...!" });
                return null;
            }
        });
    }
    render() {
        return (
            <div className="login-container">
                <div className="header">
                    <div className="logo-container">
                        <img className="img-logo" src={Logo} alt="Git Hub" />
                    </div>
                </div>
                <div className="container">
                    <div className="title">Sign in to GitHub</div>
                    <form className="form-body" onSubmit={this.handleSubmit}>
                        <div className="input-label">Username or email address</div>
                        <input className="input-field" name="username" onChange={this.handleChange}/>
                        <div className="error-msg">{this.state.errorUserName}</div>
                        <button className="submit-button" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}