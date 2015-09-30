'use strict';

import React from 'react';
import Header from '../components/header.js';

export default React.createClass({
	displayName: 'LoginForm',
	render(){
		return (
            <div className="login-wrapper">
                <Header message="Login" />
            
                <div className="small-panel">
                    <h2 className="center-text">Welcome</h2>
                    <h4 className="center-text">Enter your credentials below</h4>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <a href="#" className="button button-green">Login</a>
                </div>
            </div>
        );
	}
});