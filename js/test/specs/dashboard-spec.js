'use strict';

import React from 'react/addons';
import LoginForm from '../../src/components/dashboard.js';

var TestUtils = React.addons.TestUtils;

describe('Dashboard', () => {
	var component;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<LoginForm />);
	});

	it('should display a header with "Welcome to the Dashboard"', () => {
		expect(component.getDOMNode('header').textContent).toMatch('Welcome to the Dashboard');
	});
});