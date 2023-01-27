const mongoose  = require('mongoose')
// const {isEmail} = require('validator')

const UserSchema = mongoose.Schema({
    pseudo:{
        type:String,
        minLenght:3,
        maxLenght:30,
        required:true,
        unique:true
    },
    email:{
        type:String,
        minLenght:7,
        maxLenght:40,
        required:true,
        unique:true,
        // validate:{isEmail}
    },
    password:{
        type:String,
        minLenght:6,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

module.exports =  mongoose.model('User', UserSchema)
