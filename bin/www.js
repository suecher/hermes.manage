/**
 * Created by SueCh on 2016/4/17.
 */
"use strict";


let app = require('../app');
let config = require('../config/config');

app.listen(config.port,'192.168.1.254',function(){
    console.log('app started, listening on port:',config.port);
});


