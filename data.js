const md5 = require("md5");
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
  module.exports = {data_perosnal,data_value}