const mongoose=require('mongoose')
 
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true]
    },
    password:{
        type:String,
        required:[true]
    }
})

module.exports=mongoose.model('user',userSchema)