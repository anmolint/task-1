const mongoose = require("mongoose");
const userschema = require("./models/users.js");
const userdata = require("./models/UsersProfile.js");
const data_log = require("./data.js");
const netcall = require("./network.js");
netcall().then(()=> {
  savevalues(data_log.data_value,data_log.data_perosnal)
}).catch((err) => console.log(err));
 async function savevalues(data_value,data_perosnal)
 {
  console.log("in user data's")
  
  for(let i =0;i<data_log.data_value.length;i++){
    let w = await userschema.create(data_log.data_value[i]);
    console.log("sucess at", w);
   let h= await userdata.create(data_log.data_perosnal[i]);
   console.log("sucess at"+h);
  }
}

