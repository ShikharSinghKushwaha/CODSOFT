const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
//const User = require('../models/user');

router.post('/',async(req,res) => {
   const {userId,title,content,tags } = req.body;
try{
   const  BlogCreate = new Blog({
    userId:userId,
    title:title,
    content:content,
    tags:tags
   })
  
   await BlogCreate.save()
   res.send({message:'Blog Create Successfully'});
}catch(err) {
    res.send({
        message:'Some error occured',
        err
    })
}


// router.get('/blogs/:userId',(req,res) => {
//     const user = User.find({})
    
//     return user;
// })

   

})

module.exports = router;