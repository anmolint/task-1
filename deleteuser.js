const con = require("./network.js");
const dataBase = require("./data");
const moment = require('moment');
const now = moment();
con().then(()=> {
  deleteuser(dataBase.data_value,dataBase.data_perosnal)
}).catch((err) => console.log(err));
async function deleteuser (data_value,data_perosnal){
for (let i=0;i<dataBase.data_perosnal.length;i++){
    if(dataBase.data_value.dob-now< 25)
    {
    let w = await userschema.deleteOne(data_log.data_value[i]);
        console.log("sucess at", w);
       let h= await userdata.deleteOne(data_log.data_perosnal[i]);
       console.log("sucess at"+h);
    }
}}