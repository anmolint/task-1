const mongoose = require('mongoose');
const { Schema } = mongoose;
const user_data  = new Schema({
    user_id : { type:mongoose.ObjectId, ref: "users_schema_id" },
  dob: Number,
  mobilenumber:Number,
});
const userdata= mongoose.model("user_data",user_data);
module.exports = userdata;