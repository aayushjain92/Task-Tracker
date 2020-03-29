'use strict';
module.exports = function (app) {
    //Initialize models
    let todolist = require('./models/todolist');

    //Initialize routes
    let route = require('./routes/route');
    route(app);
};