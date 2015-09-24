'use strict';

import React from 'react';

export default React.createClass({
	displayName: 'LoginForm',
	render(){
		return (
            <div id="content" className="snap-content">
                <div className="coverpage coverpage-bg1">
                    <div className="loginbox-wrapper">
                        <div className="loginbox">
                            <h2 className="center-text">Welcome</h2>
                            <h4 className="center-text">Enter your credentials bellow</h4>

                            <input className="loginbox-username" type="text" value="Username"></input>
                            <input className="loginbox-password" type="password" value="password"></input>

                            <a href="#" className="button button-green">Login</a>
                            <em>Don have an account? <a href="#">Register for free</a></em>
                            <a href="#" className="close-loginbox">Close</a>
                        </div>
                    </div>
                </div>                
            </div> 
        );
	}
});