const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MouvementSchema = new Schema({
    type: {type:String, required: true},
    date: {type:Date, required: true},
    description: {type:String, required: true},
    somme: {type:Number, required: true},
   
});


module.exports = mongoose.model('mouvements', MouvementSchema, 'mouvements');