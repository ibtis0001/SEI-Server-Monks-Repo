const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const postRoute = require('./roots/posts')
require('dotenv/config')


mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true ,
      useNewUrlParser: true }, () =>{
        console.log("up")
      } )
    



//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/posts',postRoute)

app.use('/users', require('./route/user'))

app.listen(3455 , () => console.log(('server is running'))
)