const express = require('express');
const app = express();
const method = require('method-override')
const User = require("./model/user.js")
const router = require('./controller/user.js')


// setting views
app.set('view engine', 'ejs');

// middleware for taking info from web body
app.use(express.urlencoded({ extended: true }))

// middleware for setting img and custom css,js
app.use(express.static("public"))

// middleware for editing text
app.use(method('_method', { methods: ['POST', 'GET'] }))

// middleware router
app.use('/', router)

if(process.env.NODE_ENV === 'test'){
    app.set("port", 3001)
}else{
    app.set("port", process.env.PORT || 3000)
}

// setting server
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`)
})
