const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

router.post('/', async (req, res) => {

    try {
        const { email, password } = req.body;

        const checkLogin = await User.findOne({ email: email})
       .then((user) => {
        console.log(user);


        
          user.validatePassword(password)
         .then((checkPassword) => {

            console.log("ther user exits and validated" +  checkPassword)
            if(checkPassword == false){
                console.log('Password do not match')
                return res.status(400).send({
                    message:'Password does not Match',
                    error
                })
               // console.log(res.message)
              
            }
          
            const jwt = jsonwebtoken.sign(
                {
                userId : user._id,
                userEmail:user.email,
            },'RANDOM-TOKEN', { expiresIn:'24h'}
            );
           
            res.status(200).send({
                message:'Login Succssful',
                userId:user._id,
                userEmail:user.email,
                jwt,
            })
         
            })
            .catch(err => {
                if(err){
                    return res.status(201).send({
                        message:'Password Does not Match',
                        err,
                    })
                }
            })
         })

        
    
    }catch(err) {
       res.status(404).send({
        message:'Email Not Found',
        err,
       })
    }
})




module.exports = router;