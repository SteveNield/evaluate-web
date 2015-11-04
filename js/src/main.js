'use strict';

import RoutieConfig from '../src/config/routie.config.js';
import Routie from '../src/lib/routie';
import Ioc from '../src/config/ioc.config.js';

var tokenRepo = Ioc.resolve('tokenRepo'),
    routeHandler = Ioc.resolve('routeHandler');

RoutieConfig.configure();
tokenRepo.clear();
routeHandler.default();