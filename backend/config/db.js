const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'})

const uri = `mongodb+srv://Mathieubaugarddev:Trinite333762@cluster0.runkma2.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, 
    {
    useNewUrlParser:true,
    })
    .then(()=> console.log('Connected to mongodb'))
    .catch((error) => console.log('failed connexion to mongoDB, look error => ', error))