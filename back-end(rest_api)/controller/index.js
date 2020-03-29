'use strict';
//import todolist service.
const Service = require('../services/service');
/**
 * Returns a list of todolists in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (todolist) => {
        response.status(200);
        response.json(todolist);
    };
    Service.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new todolist with the request JSON and
 * returns todolist JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newTodolist = Object.assign({}, request.body);
    const resolve = (todolist) => {
        response.status(200);
        response.json(todolist);
    };
    Service.save(newTodolist)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a todolist object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (todolist) => {
        response.status(200);
        response.json(todolist);
    };
    Service.get(request.params.todolistId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a todolist object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {

    if(request.body.modifiedDate || request.body.createdDate){
        return response.status(400).send({
            message: "Read Only (createdDate or modifiedDate) fields passed in request."
        });
    }

    const resolve = (todo) => {
        if(todo !== null){
            const todolist = Object.assign({}, request.body);
            todolist._id = request.params.todolistId;
            const resolve_update = (todolist) => {
                response.status(200);
                response.json({message: 'todolist Successfully updated'});
            };
            Service.update(todolist)
            .then(resolve_update)
            .catch(renderErrorResponse(response));
        } else {
            response.status(404);
            response.json({
                message : "no such item exists"
            })
        }
        // response.status(200);
        // response.json(todolist);
    };
    Service.get(request.params.todolistId)
        .then(resolve)
        .catch(renderErrorResponse(response));

    
};

/**
 * Deletes a todolist object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (todolist) => {
        response.status(200);
        response.json({
            message: 'todolist Successfully deleted'
        });
    };
    Service.delete(request.params.todolistId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};