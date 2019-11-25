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
  city:{
    type:String,
    require:true
  },
  phonnum:{
    type:Number,
    require:true
  },

  data:{
    type:Date,
    default:Date.now
  },
  isDeleted:{
    type:Boolean,
    default:false
  },
  isacp:{
    type:Boolean,
    default:false
  },
  islogedin:{
    type:Boolean,
    default:false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  isSuper:{
    type:Boolean,
    default:false
  },
  isUser:{
    type:Boolean,
    default:true
  }

})


PostSchema.method.generateHash = function(pass){
  return bcrypt.hashSynce(pass,bcrypt.getSaltSync(8),null);

};

PostSchema.method.validPassword = function(pass){
  return bcrypt.compareSynce(pass,this.pass)
};



module.exports = mongoose.model('Acuser',PostSchema);
