const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
  fname:{
    type:String,
    require:true
  },
  lname:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  pass:{
    type:String,
    require:true
  },

  data:{
    type:Date,
    default:Date.now
  }
});





module.exports = mongoose.model('Posts',PostSchema);
