'use strict';

import React from 'react';
import ReactDOMNode from 'react-dom';
import Routie from '../lib/routie.js';
import LoginForm from '../components/login-form.js';
import Dashboard from '../components/dashboard.js';
import Ioc from '../config/ioc.config.js';

export default {
    
  configure: () => {
    
    var dataService = Ioc.resolve('dataService'),
        serviceConfig = Ioc.resolve('serviceConfig'),
        tokenRepo = Ioc.resolve('tokenRepo'),
        routieWrapper = Ioc.resolve('routie'),
        errorAlert = Ioc.resolve('errorAlert'),
        serviceErrorHandler = Ioc.resolve('serviceErrorHandler');
    
    routie({
        'login': () => {
            ReactDOMNode.render(
                <LoginForm
                    dataService={ dataService }
                    source={ serviceConfig.loginUri }
                    tokenRepo={ tokenRepo }
                    errorAlert={ errorAlert }
                    routieWrapper = { routie }
                />, 
                document.getElementById('application-container')
            );
        },
        'dashboard': () => {
            ReactDOMNode.render(
                <Dashboard 
                    tokenRepo={ tokenRepo } 
                    dataService={ dataService } 
                    source={ serviceConfig.resolveEndpoint('course') }
                    serviceErrorHandler={ serviceErrorHandler } 
                />, 
                document.getElementById('application-container')
            );
        }
    });
    
  }
};