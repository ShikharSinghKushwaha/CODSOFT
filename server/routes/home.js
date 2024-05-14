const express = require('express');
const Router = express.Router();
const Blog = require('../models/blog.js')


Router.get('/',async(req,res)=> {
   try{
    const allBlogs = await Blog.find({});
    res.send(allBlogs);
   }catch(err){
    console.log(err)
   }
})

module.exports = Router;