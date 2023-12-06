const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    url: String,
    email: String,
    price: Number
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;

