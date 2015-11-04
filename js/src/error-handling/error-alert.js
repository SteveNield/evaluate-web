'use strict';

class errorAlert {
    
    constructor(toastr) {
        this.toastr = toastr;
    }
    
    alert(error){
        console.log(error);
        this.toastr.error(error);
    }
    
}

errorAlert.$inject = ['toastr'];

export default errorAlert;