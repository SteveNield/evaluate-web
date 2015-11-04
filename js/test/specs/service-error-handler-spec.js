'use strict';

import ServiceErrorHandler from '../../src/services/service-error-handler.js'

describe('Service Error Handler', () => {
    
    var xhr,
        routie,
        errorAlert;
    
    beforeEach(() => {
        routie = {
            goTo: (route) => {}
        };
        errorAlert = {
            alert: (error) => {}   
        };
    });
    
    it('should alert with the correct message for a 401', () => {   
            
        spyOn(errorAlert, "alert");
        xhr = { status: 401 };
                
        var serviceErrorHandler = new ServiceErrorHandler(routie, errorAlert);
        serviceErrorHandler.handle(xhr);
        
		expect(errorAlert.alert).toHaveBeenCalledWith('Unauthorized, please log in');
        
	});
    
    it ('should alert with a general error message for an unhandled status', () => {
       
        spyOn(errorAlert, "alert");
        xhr = { status: 500 };
        
        var serviceErrorHandler = new ServiceErrorHandler(routie, errorAlert);
        serviceErrorHandler.handle(xhr);
        
        expect(errorAlert.alert).toHaveBeenCalledWith('A general error has occurred');
        
    });
    
    if ('should route to login for a 401', () => {
        spyOn(routie, "goTo");
        xhr = { status: 401 };
        
        var serviceErrorHandler = new ServiceErrorHandler(routie, errorAlert);
        serviceErrorHandler.handle(xhr);
        
        expect(routie.goTo).toHaveBeenCalledWith('login');
    });
    
});