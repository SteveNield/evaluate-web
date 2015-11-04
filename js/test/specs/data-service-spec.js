'use strict';

import DataService from '../../src/services/data-service.js';

describe('Data Service', () => {
    
    var jqWrapper,
        routie,
        mockUrl, 
        errorAlert,
        mockToken, 
        mockPayload,
        mockSuccess, 
        mockFail;
    
    beforeEach(() => {
        
        jqWrapper = {
            $: {
                ajax: (parameters) => { }
            }
        }
        
        routie = {
            goTo: (route) => {}
        };
        
        errorAlert = { alert: () => {} }
        
        mockUrl = 'MOCK_URL';
        mockToken = 'MOCK_TOKEN';
        mockPayload = 'MOCK_PAYLOAD';
        mockSuccess = () => { return 'SUCCESS'; };
        mockFail = () => { return 'FAIL'; };
    });
    
    it('should call $.ajax when making a get with correct parameters', () => {               
        var expectedParameters = {
            url: mockUrl,
            headers: {
                "Authorization": "Bearer " + mockToken   
            },
            success: mockSuccess,
            error: mockFail
        };
        
        spyOn(jqWrapper.$, "ajax");
                
        var dataService = new DataService(jqWrapper, routie);
        
        dataService.get(mockUrl, mockToken, mockSuccess, mockFail);
        
		expect(jqWrapper.$.ajax).toHaveBeenCalledWith(expectedParameters);
	});
    
    it('should route get requests to #login if token is missing', () => {
        spyOn(routie, "goTo");
        
        var spy = jasmine.createSpy(jqWrapper.$.ajax);
        
        spyOn(errorAlert, "alert");
        
        var dataService = new DataService(jqWrapper, routie, errorAlert); 
        
        dataService.get(mockUrl, null, mockSuccess, mockFail);
        
        expect(routie.goTo).toHaveBeenCalledWith('login');
        expect(spy.calls.count()).toEqual(0);
        expect(errorAlert.alert).toHaveBeenCalled();
    });
    
    it('should call $.ajax when making a post with correct parameters', () => {
        var expectedParameters = {
            url: mockUrl,
            data: mockPayload,
            dataType: 'json',
            method: 'POST',
            success: mockSuccess,
            error: mockFail
        };
        
        spyOn(jqWrapper.$, 'ajax');
        
        var dataService = new DataService(jqWrapper, routie);
        
        dataService.post(mockUrl, mockPayload, mockSuccess, mockFail);
        
        expect(jqWrapper.$.ajax).toHaveBeenCalledWith(expectedParameters);
    });
    
});