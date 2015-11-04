'use strict';

class routeHandler {
    
    constructor(tokenRepo, routieWrapper) {
        this.tokenRepo = tokenRepo;
        this.routieWrapper = routieWrapper;
    }
 
    default() {
        if (this.tokenRepo.hasToken()){
            this.routieWrapper.goTo('dashboard');
        } else {
            this.routieWrapper.goTo('login');
        }   
    }
    
}

routeHandler.$inject = ['tokenRepo', 'routie'];

export default routeHandler;