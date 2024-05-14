const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const UserSchema = require('../models/user');
const saltNum = 10;
//Router.use(bodyParser.urlencoded({extended : true}));

Router.post('/',async(req,res) => {
    try{
    
        const { name, email, password } = req.body;
       // const salt =await bcrypt.genSalt(saltNum);
        //const hash =await bcrypt.hash(password,salt);

        const User =  new UserSchema({
            name:name, 
            email:email,    
            
        });

        const hashPassword = await User.createHash(password)
        
        User.password = hashPassword;


      await  User.save();
    
      res.status(200).json({ message : 'User registered successfully'});
      
    }
    catch(err){
       
        res.status(400).send(`Error in saving user ${err}`);
    }
})

module.exports = Router