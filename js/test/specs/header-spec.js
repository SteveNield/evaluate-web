'use strict';

import React from 'react/addons';
import Header from '../../src/components/header.js';

var TestUtils = React.addons.TestUtils;

describe('Header', () => {
	var component;

	beforeEach(() => {
		component = TestUtils.renderIntoDocument(<Header message="Test Message" />);
	});

	it('should display a message passed as a prop', () => {
		expect(component.getDOMNode('header-message').textContent).toMatch('Test Message');
	});
});