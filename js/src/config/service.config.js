'use strict';

class ServiceConfig {
    
    constructor(baseUri, loginUri) {
        this.baseUri = baseUri;  
        this.loginUri = loginUri;
    }
    
    resolveEndpoint(endpoint) {
        return this.baseUri + endpoint;   
    }
}

ServiceConfig.$inject = ['baseSourceUri', 'loginUri']

export default ServiceConfig;