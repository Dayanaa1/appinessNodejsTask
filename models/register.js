let mongoose=require('mongoose');
let Schema=mongoose.Schema
let userSchema=new Schema({
    email:{
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password:{
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    }
})

module.exports=mongoose.model('Register',userSchema)
