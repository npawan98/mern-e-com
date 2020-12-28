// import mongoose from 'mongoose';
  const mongoose = require("mongoose");
  const { Schema } = mongoose;
  const crypto = require('crypto');
  const uuidv1 = require('uuid/v1');


  const userSchema = new.mongoose.Schema({
   name:{
       type: String,
       required:true,
       maxlength:32,
       trim:true
   },
   lastname:{
       type:String,
       maxlength:32,
       trim:true
   },
   email:{
       type:String,
       required:true,
       unique: true,
       trim:true,
   },
   userinfo:{
       type:String,
       trim:true
   },
   //TODO: come back here,
   encry_password:{
       type:String,
       required:true,
   },
   salt: String,
   role:{
       type:Number,
       default:0
   },
   purchases:{
       type:Array,
       default:[],
   },

  },{timestamps: true});


  userSchema.virtuals("password")
  .set(function(password){
      this._password = password;  // here _ is used for private variable
      this.salt = uuidv1();
      this.encry_password = this.securePassword(password);
  })
  .get(function(){
      return this._password
  })




  //methods

  userSchema.method = {

    autheticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
    },
    
      securePassword: function(plainpassword){
          if(!password) return "";
          try{
              return crypto
              .createHmac('sha256',this.salt) //here secret (before this.salt) referes to salt 
              .update(plainpassword)
              .digest('hex');

          }catch(err){
              return ""
          }
      }
  }

  module.exports = mongoose.model("User",userSchema)