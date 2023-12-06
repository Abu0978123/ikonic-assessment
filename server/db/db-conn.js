const mongoose = require("mongoose");
const URL = process.env.MONGO_DB_URL;
module.exports =  async function DB_conn() {
    await mongoose.connect(URL).then(() => {
      console.log("connected successfully");
    });
  } 