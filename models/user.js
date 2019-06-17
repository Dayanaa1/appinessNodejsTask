let mongoose=require('mongoose')
let schema=mongoose.Schema;
let _=require('lodash')

let userSchema=new schema({
   
  
      name:{
            first: {type:String, 
                    minlength: 3,
                     maxlength:12},
            last: {type:String, 
                  minlength: 3,
                  maxlength:12},
        },
    email:{type:String,required:true},
    gender:{type:String,enum:['male','female']},
    mobile:{type:Number,required:true}

})



  module.exports=mongoose.model('User',userSchema)
