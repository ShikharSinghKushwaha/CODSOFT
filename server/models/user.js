const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersModel = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String,required:true},

})


usersModel.methods.createHash =async function (password) {
    const saltNum = 10;

    const salt = await  bcrypt.genSalt(saltNum)
    return await bcrypt.hash(password,salt)


}

usersModel.methods.validatePassword = async function(providedPass) {
    return await bcrypt.compare(providedPass,this.password)
}

const userSchema = mongoose.model('User', usersModel);

module.exports = userSchema;