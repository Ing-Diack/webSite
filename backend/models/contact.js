const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    surName : { type:String, required : true},
    name : {type: String, required : true},
    email : { type:String , required : true},
    message : {type: String, required : true},
    userId : {type :String, required : true}
});

module.exports = mongoose.model('Contact',userSchema);