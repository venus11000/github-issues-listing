import React from 'react';
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
        this.checkValidUserOrNot(this.state.userName);
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
            <div>
                <div>
                    <div>
                        <img src={Logo} alt="Git Hub" />
                    </div>
                    <div>Sign in to GitHub</div>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>Username or email address</div>
                        <input name="username" onChange={this.handleChange}/>
                        {this.state.errorUserName}
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}