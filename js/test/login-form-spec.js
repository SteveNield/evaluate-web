'use strict';

import React from 'react/addons';
import LoginForm from '../src/components/login-form.js';

var TestUtils = React.addons.TestUtils;

describe('LoginForm', () => {
	var component;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
	});

	it('should display a header with "Login"', () => {
		expect(component.getDOMNode('header').textContent).toMatch('Login');
	});
});