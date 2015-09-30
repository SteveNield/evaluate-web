'use strict';

import React from 'react/addons';
import LoginForm from '../../src/components/login-form.js';

var TestUtils = React.addons.TestUtils;

describe('LoginForm', () => {
	var component;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
	});
        
    it('should display a header with correct message', () => {
		expect(component.getDOMNode('panel-header').textContent).toMatch('Welcome');
	});
        
    it('should display a sub-header with correct message"', () => {
       expect(component.getDOMNode('panel-sub-header').textContent).toMatch('Enter your credentials below'); 
    });
});