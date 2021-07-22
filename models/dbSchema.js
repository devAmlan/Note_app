const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const noteSchema  =  new Schema({
    title:{
        type:String,
        require:true
    },
    note:{
      type:String,
      require:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }  
})

var Note = mongoose.model('Note',noteSchema)
module.exports = Note;