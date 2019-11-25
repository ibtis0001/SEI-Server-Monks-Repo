const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


process.env.SECRET_KEY = 'secret'
// rigister steps (1-regist)
router.post('/register', (req, res) => {
    const newUser = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password
    }
    console.log(newUser)
    // Search if email is exist or not
    User.findOne({email : req.body.email})
    .then(user => {
        // if email not exist
        if(!user){
            // hashing step
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                newUser.password = hash
                //create the user
                User.create(newUser)
                .then(user => res.send("user created" + newUser.email))
                .catch(err => res.send(err))
            })
        }
        // if email is exist
        else {
            res.send(`email is already used`)
        }
    })
    .catch(err => res.send(err))
})

// Login steps (1-login) 
router.post('/login', (req, res)=> {
    //check email is exist or not
    
    User.findOne({email: req.body.email})
    .then(user => {
        // if email is exist
       
        if(user) {
            
            if(bcrypt.compareSync( req.body.password,user.password)){

                user.password = "" //  "" we don't want password to appear
                var paylod = {user}
                let token = jwt.sign(paylod, 'secret', {expiresIn: 1440})  
                res.json({token}).status(200) 
            }
            // if password not the same
            else {
                res.json({ error : "email is not currect"}).status(401)
            }
        }
        else {
            // if email not exist
            console.log("yess")
            res.json({error : "email is not found"}).status(404)
        }
    })
    .catch(err => res.send(err))
})


// we comment the below code because we want to do it with React 
// get user (2-login) convert token to data and find it in our database

// router.get('/profile', (req, res) =>{
//     var decoded = jwt.verify(req.body.token, 'secret')

//     User.findById(decoded.user._id)
//     .then(user => user ? res.json(decoded.user) : res.send("token is not correct"))
//     .catch(err => res.send(err))
// })
// now we can check it in postman by GET with {
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkZDk0NTc2NGYwMWU1NTdkZjI3YjU5MSIsImZpcnN0X25hbWUiOiJmYWhhZCIsImxhc3RfbmFtZSI6ImFscSIsImVtYWlsIjoiZkBmLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJE14d3R1eVYwY3VQU1ZNNUtDV1Ztbk9teW1iUi9yM3ZjVEdxalE2NVdzOHNrd0tCV3VqQXplIiwiY3JlYXRlZEF0IjoiMjAxOS0xMS0yM1QxNDo0MzowMi4yMDJaIiwidXBkYXRlZEF0IjoiMjAxOS0xMS0yM1QxNDo0MzowMi4yMDJaIiwiX192IjowfSwiaWF0IjoxNTc0NTIzMjg4LCJleHAiOjE1NzQ1MjQ3Mjh9.Aj6Q7Wq8YBM3vkXWZTGzUWrdzfnU_vECXpJY2LZfexc"
// }

module.exports = router