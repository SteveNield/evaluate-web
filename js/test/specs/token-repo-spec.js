'use strict';

import TokenRepo from '../../src/repositories/token-repo.js';

describe('Token Repository', () => {
	   
    var token;
    var tokenRepo;
    
    beforeEach(() => {
        token = "TEST_TOKEN";   
        tokenRepo = new TokenRepo();
    });
    
    afterEach(() => {
       window.localStorage.removeItem('currentToken'); 
    });
    
    it('should put a given token in localStorage', () => {
        tokenRepo.put(token);
		expect(window.localStorage.getItem('currentToken')).toMatch(token);
	});
    
    it('should get a token from localStorage if one exists', () => {
        window.localStorage.setItem('currentToken', token);
        var retrievedToken = tokenRepo.get();
        expect(retrievedToken).toMatch(token);
    });
    
    it('should get no token from localStorage if one does not exist', () => {
        window.localStorage.removeItem('currentToken');
        var retrievedToken = tokenRepo.get();
        expect(retrievedToken).toEqual(null);
    });
    
    it ('should indicate a token is present if one exists', () => {
        window.localStorage.setItem('currentToken', token);
        expect(tokenRepo.hasToken()).toEqual(true);
    });
    
    it ('should indicate a token is not present if one does not exist', () => {
        window.localStorage.removeItem('currentToken');
        expect(tokenRepo.hasToken()).toEqual(false);
    });
        
    it ('should remove token from localStorage', () => {
        window.localStorage.setItem('currentToken', token);
        tokenRepo.clear();
        expect(window.localStorage.getItem('currentToken')).toEqual(null);
    });
});