const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create todolist Schema & model
const TodolistSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Name field is required']
    },
    description : String,
    createdDate: { 
        type : Date, 
        default: Date.now
    },
    modifiedDate: { 
        type : Date, 
        default: Date.now
    }
}, { versionKey: false });
TodolistSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
module.exports = mongoose.model('todolist', TodolistSchema);