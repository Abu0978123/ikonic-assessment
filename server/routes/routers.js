const express = require('express');
const router = express.Router();

const { getUser, postUser, putUser, deleteUser, loginUser, registerUser, adminLogin, AdminReg } = require('../controllers/controllers')

router.route('/').get(getUser)
router.route('/create').post(postUser)
router.route('/update/:id').put(putUser)
router.route('/deleteuser/:id').delete(deleteUser)
router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/admin/login").post(adminLogin)
router.route("/admin/register").post(AdminReg)

module.exports = router;