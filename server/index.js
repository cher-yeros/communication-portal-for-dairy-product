const express = require('express')
const app = express()

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});


const auth = require('./routes/auth');
const admin = require('./routes/admin');
const buyer = require('./routes/buyer');
const seller = require('./routes/seller');


app.use('/api', auth)
app.use('/api/admin', admin)
app.use('/api/buyer', buyer)
app.use('/api/seller', seller)
 
const port = 5000

const ip = 'localhost'

app.listen(port)

console.log(`Server is listening to ${ip} on port ${port}`)

