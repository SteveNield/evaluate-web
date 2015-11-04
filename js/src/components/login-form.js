'use strict';

import React from 'react';
import Header from '../components/header.js';

export default React.createClass({
    
	displayName: 'LoginForm',
    
    getInitialState() {
        return { 
            username: '', 
            password: ''
        };
    },
    
    handleInput(e) {
        if (e.target.id == 'username'){
            this.setState({username: e.target.value});
        } else {
            this.setState({password: e.target.value});   
        }
    },
    
    resolveLoginButtonClass() {
        if (this.state.username && this.state.password){
            return 'button button-green';   
        }
        return 'button button-disabled';
    },
    
    handleLogin() {
        var loginAttempt = {
            Username: this.state.username,
            Password: this.state.password
        };
        
        this.props.dataService.post(
            this.props.source,
            loginAttempt,
            this.handleSuccessfulLogin,
            this.handleFailedLogin
        );
    },
    
    handleSuccessfulLogin(data) {
        this.props.tokenRepo.put(data);
        this.props.routie.goTo('dashboard');
    },
    
    handleFailedLogin(xhr) {
        this.props.errorAlert.alert('Login failed.');
    },
    
	render(){
		return (
            <div className="login-wrapper">
                <Header message="Login" />
            
                <div className="small-panel">
                    <h2 className="center-text form-header">Welcome</h2>
                    <h4 className="center-text form-sub-header">Enter your credentials below</h4>
                    <input id="username" className="form-username" type="text" placeholder="Username" onChange={this.handleInput} value={this.state.username}></input>
                    <input id="password" className="form-password" type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password}></input>
                    <a href="#" className={this.resolveLoginButtonClass()} onClick={this.handleLogin}>Login</a>
                </div>
            </div>
        );
	}
    
});