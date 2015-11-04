'use strict';

import React from 'react/addons';
import LoginForm from '../../src/components/login-form.js';

var TestUtils = React.addons.TestUtils;

describe('LoginForm', () => {
	var component;
        
    it('should display a header with correct message', () => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
        var headerNode = TestUtils.findRenderedDOMComponentWithClass(component, 'form-header');
                                                 
		expect(headerNode.textContent).toEqual('Welcome');
	});
        
    it('should display a sub-header with correct message"', () => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
        var subHeaderNode = TestUtils.findRenderedDOMComponentWithClass(component, 'form-sub-header');
                                                 
        expect(subHeaderNode.textContent).toEqual('Enter your credentials below'); 
    });
        
    it('should getInitialState containing username, password and loginButtonClass', () => {
        var expectedState = { username: '', password: '' };
        
        expect(LoginForm.prototype.getInitialState()).toEqual(expectedState);
    });
    
    it('should set username in state when username field is changed', () => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
        
        var mockEvent = {
            target: {
                id: 'username',
                value: 'TEST'
            }
        }
                                                 
        spyOn(component, 'setState');
        
        component.handleInput(mockEvent);
        
        expect(component.setState).toHaveBeenCalledWith({ username: 'TEST' });
    });
    
    it('should set password in state when password field is changed', () => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
        
        var mockEvent = {
            target: {
                id: 'password',
                value: 'TEST'
            }
        }
                                                 
        spyOn(component, 'setState');
        
        component.handleInput(mockEvent);
        
        expect(component.setState).toHaveBeenCalledWith({ password: 'TEST' });
    });
    
    it('should resolve loginButtonClass to "button button-disabled" when username is empty', () => {
        component = TestUtils.renderIntoDocument(<LoginForm />);

        component.setState({password: 'TEST'});
        
        expect(component.resolveLoginButtonClass()).toEqual('button button-disabled');
    });
    
    it('should set loginButtonClass to "button button-disabled" when password is empty', () => {
        component = TestUtils.renderIntoDocument(<LoginForm />);

        component.setState({username: 'TEST'});
        
        expect(component.resolveLoginButtonClass()).toEqual('button button-disabled');
    });
    
    it('should set loginButtonClass to "button button-green" when username and password are set', () => {
        component = TestUtils.renderIntoDocument(<LoginForm />);

        component.setState({username: 'TEST', password: 'TEST'});
        
        expect(component.resolveLoginButtonClass()).toEqual('button button-green');
    });
    
    it('should post username and password to source URL on button click', () => {
        var mockDataService = {
            post: (parameters) => {}
        };
        
        spyOn(mockDataService, 'post');
        
        component = TestUtils.renderIntoDocument(<LoginForm dataService={mockDataService} source="MOCK_URL" />);
                                                 
        component.setState({username: 'username', password: 'password'});
        
        component.handleLogin();
        
        expect(mockDataService.post).toHaveBeenCalledWith('MOCK_URL', {Username: 'username', Password: 'password'}, 
            component.handleSuccessfulLogin, component.handleFailedLogin);
    });
    
    it('should alert a general error if login failed', () => {
        var mockErrorAlert = { alert: () => {} };
        
        spyOn(mockErrorAlert, 'alert');
        
        component = TestUtils.renderIntoDocument(<LoginForm errorAlert={ mockErrorAlert } />);
        
        component.handleFailedLogin();
        
        expect(mockErrorAlert.alert).toHaveBeenCalledWith('Login failed.');
    });
    
    it('should add the token to the tokenRepo and route to #dashboard if login succeeded', () => {
        var mockTokenRepo = { put: () => {} };
        var mockRoutie = { goTo: () => {} };
        
        spyOn(mockTokenRepo, 'put');
        spyOn(mockRoutie, 'goTo');
        
        component = TestUtils.renderIntoDocument(<LoginForm tokenRepo={ mockTokenRepo } routie={ mockRoutie } />);
        
        component.handleSuccessfulLogin('MOCK_TOKEN');
        
        expect(mockTokenRepo.put).toHaveBeenCalledWith('MOCK_TOKEN');
        expect(mockRoutie.goTo).toHaveBeenCalledWith('dashboard');
    });
});