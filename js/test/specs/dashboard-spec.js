'use strict';

import React from 'react/addons';
import Dashboard from '../../src/components/dashboard.js';

var TestUtils = React.addons.TestUtils;

describe('Dashboard', () => {
	var component,
        token,
        courses,
        tokenRepo,
        dataService,
        source;

	beforeEach(() => {
        token = 'TEST';
        source = 'TEST';
        courses = [];
        tokenRepo = {
            hasToken: () => { return true; },
            get: () => { return token; }
        };
        dataService = {
            get: (url, token, success, fail) => {return [];}
        };
	});

	it('should display a header with "Welcome to the Dashboard"', () => {
		component = TestUtils.renderIntoDocument(
            <Dashboard tokenRepo={tokenRepo} dataService={dataService} source={source} />);
            
		expect(component.getDOMNode('header').textContent).toMatch('Welcome to the Dashboard');
	});
        
    it('has a displayName of "Dashboard"', () => {
       expect(Dashboard.displayName).toMatch('Dashboard'); 
    });
        
    it('should set an empty array of courses as the initialState', () => {
       expect(Dashboard.prototype.getInitialState()).toEqual({ courses: courses }); 
    });
        
    it('should call dataService.get() with the correct parameters', () => {
        spyOn(dataService, 'get');
        
		component = TestUtils.renderIntoDocument(
            <Dashboard tokenRepo={tokenRepo} dataService={dataService} source={source} />);
        
        component.componentDidMount();
        
        expect(dataService.get).toHaveBeenCalledWith(
            source, token, component.handleSuccessfulLoad, component.handleFailToLoad);
    });
    
    it('should setState to argument if component is mounted on successful load', () => {
		component = TestUtils.renderIntoDocument(
            <Dashboard tokenRepo={tokenRepo} dataService={dataService} source={source} />);
            
        component.isMounted = () => { return true; }
        
        spyOn(component, 'setState');
        
        component.handleSuccessfulLoad(courses);
        
        expect(component.setState).toHaveBeenCalledWith({ courses: courses });        
    });
    
    it('should not call setState is component is not mounted on successful load', () => {
        component = TestUtils.renderIntoDocument(
            <Dashboard tokenRepo={tokenRepo} dataService={dataService} source={source} />);
            
        component.isMounted = () => { return false; }
        
        var spy = jasmine.createSpy(component, 'setState');
        
        component.handleSuccessfulLoad(courses);
        
        expect(spy.calls.count()).toEqual(0);
    });
    
    it('should pass the response to the serverErrorHandler on failed load', () => {
        var serviceErrorHandler = {
          handle: (xhr) => {}  
        };
        
        var xhr = 'MOCK_RESPONSE';
        
        component = TestUtils.renderIntoDocument(
            <Dashboard 
                tokenRepo={tokenRepo} 
                dataService={dataService} 
                source={source} 
                serviceErrorHandler={ serviceErrorHandler } />);
            
        spyOn(serviceErrorHandler, 'handle');
        
        component.handleFailToLoad(xhr);
        
        expect(serviceErrorHandler.handle).toHaveBeenCalledWith(xhr);
    });
});