'use strict';

import React from 'react';
import Routie from '../lib/routie.js';
import LoginForm from '../components/login-form.js';
import Dashboard from '../components/dashboard.js';

export default {
    
  configure: () => {   
    routie({
        'login': () => {
            React.render(<LoginForm />, document.getElementById('application-container'));
        },
        'dashboard': () => {
            React.render(<Dashboard />, document.getElementById('application-container'));
        }
    });
  }
};