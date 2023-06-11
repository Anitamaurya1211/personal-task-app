const express = require ('express');
const bodyParser = require('body-parser');
var app = express();
const {myTaskRoutes} = require('./src/routes/myTaskRoutes')

app.use(bodyParser.json())
 const cors = require('cors'); // Import the cors middleware
 app.use(cors()); // Enable CORS for all routes
 myTaskRoutes(app)
 
 app.listen(3000,()=>console.log('Express server is running on port 3000'))
