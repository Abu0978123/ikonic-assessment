const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const AdminRegister = mongoose.model("AdminRegister", userSchema)

module.exports = AdminRegister;