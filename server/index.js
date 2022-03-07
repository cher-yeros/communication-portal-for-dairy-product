const express = require('express')
const app = express()
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});
 
//const head = require('./routes/head')
//const purchaser = require('./routes/purchaser')
//const staff = require('./routes/staff')
//const storeKeeper = require('./routes/store-keeper')
//const admin = require('./routes/admin')
//const common = require('./routes/common-route')


//app.use('/api', common);
//app.use('/api/head', head);
//app.use('/api/purchaser', purchaser);
//app.use('/api/staff', staff);
//app.use('/api/store-keeper', storeKeeper);
//app.use('/api/sa',admin);
 
const port = 3000

const ip = 'localhost'

app.listen(3000)

console.log(`Server is listening to ${ip} on port ${port}`)