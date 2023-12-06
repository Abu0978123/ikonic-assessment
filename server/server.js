const express = require('express')
require('dotenv').config()
const DB_conn = require('./db/db-conn')
const cors = require('cors')
const PORT = process.env.PORT || 3002;

const get_user_data = require('./routes/routers')

const app = express()
app.use(cors())
app.use(express.json())
 
// db connection      
DB_conn();

// middleware or set router
app.use('/api', get_user_data)


app.listen(PORT, () => {
    console.log(`user server is running on ${PORT}`);
})