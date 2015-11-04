'use strict';

import RouteHandler from '../../src/routing/route-handler.js'

describe('Route Handler', () => {
    
    var routieWrapper;
    
    beforeEach(() => {
        routieWrapper = { goTo: (route) => {} };
    });
    
    it('default should route to dashboard when token is present', () => {
        var tokenRepo = { hasToken: () => { return true; } };
        
        spyOn(routieWrapper, "goTo");
                
        var routeHandler = new RouteHandler(tokenRepo, routieWrapper);
        routeHandler.default();
        
		expect(routieWrapper.goTo).toHaveBeenCalledWith('dashboard');
	});
    
    it('default should route to login when token is not present', () => {
        var tokenRepo = { hasToken: () => { return false; } };
        
        spyOn(routieWrapper, "goTo");
        
        var routeHandler = new RouteHandler(tokenRepo, routieWrapper);
        routeHandler.default();
        
        expect(routieWrapper.goTo).toHaveBeenCalledWith('login');
    });
    
});