'use strict';

class serviceErrorHandler {
    
    constructor(routie, errorAlert) {
        this.routie = routie;
        this.errorAlert = errorAlert;
    }
    
    handle(xhr){
        
        if (xhr.status == 401){
            this.errorAlert.alert('Unauthorized, please log in');
            this.routie.goTo('login');
        }
        
        this.errorAlert.alert('A general error has occurred');
    }
    
}

serviceErrorHandler.$inject = ['routie', 'errorAlert'];

export default serviceErrorHandler;