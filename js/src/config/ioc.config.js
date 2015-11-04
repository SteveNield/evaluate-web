import Ioc from '../lib/ioc.js';
import Toastr from 'toastr';
import jQuery from 'jquery';

import RouteHandler from '../routing/route-handler.js';
import TokenRepo from '../repositories/token-repo.js';
import Routie from '../routing/routie-wrapper.js';
import ErrorAlert from '../error-handling/error-alert.js';
import DataService from '../services/data-service.js';
import ServiceErrorHandler from '../services/service-error-handler.js';

import ServiceConfig from '../config/service.config.js';
import EnvironmentConfig from '../config/environment.config.js';

const ioc = new Ioc();
console.log(jQuery.ajax);

ioc.registerType('toastr', Toastr);
ioc.registerType('jQuery', { $: jQuery });

ioc.registerType('routeHandler', RouteHandler);
ioc.registerType('tokenRepo', TokenRepo);
ioc.registerType('routie', Routie);
ioc.registerType('errorAlert', ErrorAlert);
ioc.registerType('dataService', DataService);
ioc.registerType('serviceErrorHandler', ServiceErrorHandler);

ioc.registerType('serviceConfig', ServiceConfig);
ioc.registerType('baseSourceUri', EnvironmentConfig.baseSourceUri);
ioc.registerType('loginUri', EnvironmentConfig.loginUri);

ioc.testConfig();

export default ioc;
