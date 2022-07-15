const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false}));

app.get('/',(req,res) => {
    res.render('index.ejs', {name: "Paul"});
})

app.get('/login',(req,res) => {
    res.render('login.ejs', {name: "Paul"});
})

app.get('/register',(req,res) => {
    res.render('register.ejs', {name: "Paul"});
})


app.post('/login', (req,res) => {
    
})

app.post('/register', (req,res) => {

})

app.listen(3000);