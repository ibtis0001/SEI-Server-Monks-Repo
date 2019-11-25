const mongoose = require('mongoose');
const AcuserSessionSchema = mongoose.Schema({
  userId:{
    type:Number,
    default:-1
  },
  timestamp:{
    type:Date.now()

  },
  isDeleted:{
    type:Boolean,
    default:false
  }

})



module.exports = mongoose.model('AcuserSession',AcuserSessionSchema);
