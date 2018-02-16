module.exports = "require('dotenv').config(); \n const express = require('express');\n"+"const mongoose = require('mongoose');\n"+"const app = express();\n"+
"mongoose.connect(process.env.DB_URI).then(\n() => {console.log('Database Ready')},\n err => { console.log('Database Connection Error: ' + err)});"+
"\n app.listen(process.env.port,()=>{console.log('App Listening On Port'+ process.env.PORT)})"
