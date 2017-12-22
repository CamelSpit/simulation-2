const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , port = 4000
    , session = require('express-session')
    , auth = require('./controllers/authController')
    , CheckForSession = require('../middleware/CheckForSession')
    app = express();



require('dotenv').config();

//sim2: 75C
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true
}))
//sim2: 75D
app.use(CheckForSession);

//AUTHORIZATION 
//sim1: 74D-3
app.post('/api/auth/login', auth.login);
app.post('/api/auth/register', );
app.post('/api/auth/logout', )

//sim2 44D
massive (process.env.CONNECTION_STRING).then(db=> {
    app.set('db', db);
    app.listen(port, ()=>console.log('Big Brother is listening on port 4000'));
})


