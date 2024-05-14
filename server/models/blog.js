const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    userId:{type:String, required:true},
   // createdAt:{type:String,created:new Date()},
    title:{type:String, required:true},
    content:{type: String,required: true},
    tags:{type:String}
   
})

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;