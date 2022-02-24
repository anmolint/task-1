const mongoose = require('mongoose');
const { Schema } = mongoose;

const users_schema = new Schema({
  firstname:  String, 
  email: String,
  lastname:   String,
  password: String,
  
});
const userschema= mongoose.model("Users",users_schema);
module.exports = userschema;