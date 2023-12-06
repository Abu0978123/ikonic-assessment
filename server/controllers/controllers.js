const UserModel = require('../Models/User')
const UserRegister = require('../Models/userRegister')
const AdminRegister = require('../Models/adminRegister')
// get user data controller 
const getUser = (req, res) => {
    UserModel.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json(err))
}

// post user data controller
const postUser = (req, res) => {
    UserModel.create(req.body)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(404).json(err))
}
 
// update user data controller
const putUser = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        url: req.body.url,
        email: req.body.email,
        price: req.body.price
    }).then(user => res.status(200).json(user))
    .catch(err => res.status(err.status || 500).json(err))
}

// delete user data controller
const deleteUser = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).json(err))
}

//user login user controller 
const loginUser = (req, res)=> {
    const { email, password} = req.body
    UserRegister.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}

//user Register user here
const registerUser = (req, res)=> {
    const { name, email, password} = req.body
    UserRegister.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new UserRegister({
                name,
                email,
                password
            })
            user.save(err => { 
                if(err) {
                    res.send(err)  
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}

// Admin login user controller 
const adminLogin = (req, res)=> {
    const { email, password} = req.body
    AdminRegister.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}

// Admin Register user here
const AdminReg = (req, res)=> {
    const { name, email, password} = req.body
    AdminRegister.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new AdminRegister({
                name,
                email,
                password
            })
            user.save(err => { 
                if(err) {
                    res.send(err)  
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}


module.exports = { getUser, postUser, putUser, deleteUser, loginUser, registerUser, adminLogin, AdminReg}; 