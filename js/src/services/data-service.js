'use strict';

class secureDataService {
    
    constructor(jq, routie, errorAlert) {
        this.jq = jq;
        this.routie = routie;
        this.errorAlert = errorAlert;
    }
    
    //secured
    get(url, token, success, fail) {
        
        if (token == null){
            this.routie.goTo('login');
            this.errorAlert.alert('Not authorized, please login');
            return;
        }
        
        this.jq.$.ajax({
            url: url,
            headers: {
                "Authorization": "Bearer " + token
            },
            success: success,
            error: fail
        });
    }
    
    //not secured
    post(url, data, success, fail){
        
        this.jq.$.ajax({
            url: url,
            dataType: 'json',
            data: data,
            method: 'POST',
            success: success,
            error: fail
        });
    }
    
};

secureDataService.$inject = ['jQuery', 'routie', 'errorAlert'];

export default secureDataService;