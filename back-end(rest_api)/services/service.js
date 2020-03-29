'use strict';
const mongoose = require('mongoose'),
Todolist = mongoose.model('todolist');

/**
 * Returns an array of todolist object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Todolist.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new todolist object.
 *
 * @param {Object} todolist {todolist object}
 */
exports.save = function (todolist) {
    const newTodolist = new Todolist(todolist);
    const promise = newTodolist.save();
    return promise;
};

/**
 * Returns the todolist object matching the id.
 *
 * @param {string} todolistId {Id of the todolist object}
 */
exports.get = function (todolistId) {
    const promise = Todolist.findById(todolistId).exec();
    return promise
};

/**
 * Updates and returns the todolist object.
 *
 * @param {Object} todolist {todolist object}
 */


exports.update = function (todolist) {

        todolist.modifiedDate = new Date().toISOString();
        const promise = Todolist.findOneAndUpdate({_id: todolist._id}, todolist).exec();
        return promise;

};

/**
 * Deletes the todolist object matching the id.
 *
 * @param {string} todolistId {Id of the todolist object}
 */
exports.delete = function (todolistId) {
    const promise = Todolist.remove({_id: todolistId});
    return promise;
};