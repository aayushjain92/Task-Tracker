'use strict';
module.exports = function (app) {
    var Controller = require('../controller/index');
    // Sticky Routes for search and create.
    app.route('/todolist')
        .get(Controller.list)
        .post(Controller.post);

    // // Sticky Routes for get, update and delete.
     app.route('/todolist/:todolistId')
         .get(Controller.get)
         .put(Controller.put)
         .delete(Controller.delete);
};