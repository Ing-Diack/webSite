const mongoose = require('mongoose');
const mongooseValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username:{type:String, required :true},
    email:{type:String,required:true,unique:true},
    password : {type:String,required:true}
});
userSchema.plugin(mongooseValidator);

module.exports = mongoose.model('User', userSchema);