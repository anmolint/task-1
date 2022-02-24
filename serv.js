const mongoose = require("mongoose");
const md5 = require("md5");
main().then(()=> {
  savevalues(data_value,data_perosnal)
}).catch((err) => console.log(err));

async function main() {
  var a = await mongoose.connect(
    "mongodb+srv://Anmol:baloni@cluster0.v1fvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  if (a) {
    console.log("sucess");
  }
}
const userschema = require("./users.js");
const userdata = require("./UsersProfile.js");
console.log("done");
const data_value = [
  {
    firstname: "anmol",
    email: "baloni@xyz",
    lastname: "baloni",
    password: md5("pass@123"),
  },
  {
    firstname: "abcd",
    email: "nono@xyz",
    lastname: "qwer",
    password: md5("pass@123"),
  },
  {
    firstname: "qwer",
    email: "nonono@xyz",
    lastname: "abcd",
    password: md5("pass@123"),
  },
  {
    firstname: "nila",
    email: "nonnno@xyz",
    lastname: "abd",
    password: md5("pass@123"),
  },
  {
    firstname: "qer",
    email: "nonoo@xyz",
    lastname: "abd",
    password: md5("pass@123"),
  },
];
const data_perosnal =[
  { 
    dob: new Date(1997, 03,12),
    mobilenumber: 123456,
  },
  {
  dob: new Date(1994, 03,12),
  mobilenumber: 78910,
  },
  {
  dob: new Date(2000, 03,12),
  mobilenumber: 123456,
  },
{
dob: new Date(2001, 03,12),
mobilenumber: 123456,
},
{
dob: new Date(2002, 03,12),
mobilenumber: 123456,
},
]

 async function savevalues(data_value,data_perosnal){
  console.log("in user data s")
  for(let i =0;i<5;i++){
    let w = await userschema.create(data_value[i]);
    console.log("sucess at", w);
  // let h= await userdata.create(data_perosnal[i]);
  // console.log("sucess at"+h);
  }
}

