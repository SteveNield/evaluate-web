'use strict';

class tokenRepo {
    
    put(token) {
        window.localStorage.setItem('currentToken', token);
    }
    
    get() {
        return window.localStorage.getItem('currentToken');   
    }
    
    hasToken() {
        return window.localStorage.getItem('currentToken') != null;
    }
    
    clear() {
        window.localStorage.removeItem('currentToken');   
    }
}

export default tokenRepo;