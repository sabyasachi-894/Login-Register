const express = require ('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const { session } = require('passport');
const passport = require('passport');
const app = express();

//Passport config
require('./config/passport')(passport);

//Configuration of db
const db= require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodyParser
app.use(express.urlencoded({extended: false})); //data is achieved from form with request from body

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Routing
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));