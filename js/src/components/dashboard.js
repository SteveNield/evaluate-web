'use strict';

import React from 'react';

export default React.createClass({
    
	displayName: 'Dashboard',
    
    getInitialState() {
        return {
            courses: []
        };
    },
    
    componentDidMount() {
        var courses = this.props.dataService.get(
            this.props.source,
            this.props.tokenRepo.get(),
            this.handleSuccessfulLoad,
            this.handleFailToLoad
        );
    },
    
    handleSuccessfulLoad(data) {
        if (this.isMounted()){
            this.setState({ courses: data });  
        }
    },
            
    handleFailToLoad(xhr, status, err) {
        this.props.serviceErrorHandler.handle(xhr);
    },
    
	render(){
		return (
            <div>
                <h1>Welcome to the Dashboard</h1>
                <ul>
                {this.state.courses.map((course) => {
                    <li>{course}</li>
                })};
                </ul>
            </div>
        );
	}
});