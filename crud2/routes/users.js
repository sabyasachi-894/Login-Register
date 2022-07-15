const express = require('express');
const router = express.Router();
// const passport = require('passport');
import passport from "passport";
const bcrypt = require('bcryptjs');

//User Model
const User = require('../models/User');
const passport = require('../config/passport');

//login page
router.get('/login', (req, res) => {
    res.render('login');
})

//register page
router.get('/register', (req, res) => {
    res.render("register");
})


//register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //To check all the required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all the fields" });
    }

    //Check if passwords match
    if (password != password2) {
        errors.push({ msg: "Passwords do not match:(" });
    }

    //Checking length of password
    if (password.length < 6) {
        errors.push({ msg: "Password should be atleast 6 characters long!" });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    }
    else {
        //With Validation having passed
        User.findOne({ email: email }).then(user => {
            if (user) {
                errors.push({ msg: 'Email has already been registered:)' });
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else{
                const newUser = new User({
                    name,
                    email,
                    password
                });
                //Hash Password
                bcrypt.genSalt(10, (err,salt) =>
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    //Set password to hash
                    newUser.password = hash;

                    //Save User
                    newUser.save().then(user => {
                        res.redirect('/users/login');
                    }).catch(err => console.log(err));
                }))
            }
        });
    }
});


//login handle
router.post('/login',(req, res, next) =>{
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
    })
})(req, res, next);

module.exports = router;