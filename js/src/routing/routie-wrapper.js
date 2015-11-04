'use strict';

import Routie from '../../src/lib/routie';

class routieWrapper {
    goTo(route) {
        routie(route);   
    }
}

export default routieWrapper;