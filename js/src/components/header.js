'use strict';

import React from 'react';

export default React.createClass({
    
	displayName: 'Header',
    
	render(){
		return (
            <div className="header">
                <a href="#" id="header-message">{this.props.message}</a>
            </div>
        );
	}
    
});