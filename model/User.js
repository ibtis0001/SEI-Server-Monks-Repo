const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        required: true,
        type: String
    },
    password : {
        required: true,
        type: String
    
    },
    admin:{
        type:Boolean,
        default:false
    },
    

}, { timestamps: true })

// module.exports = User = userSchema

const User = mongoose.model('user', userSchema)
module.exports = User