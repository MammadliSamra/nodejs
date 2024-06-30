const express = require('express');
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
var StringDecoder = require('string_decoder').StringDecoder;

const port = 3000;
let arr = [];

var d = new StringDecoder('utf8');
var b = ''

const app = express();

app.use(express.static('public'));

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/register', async (req, res) => {
    let user = { 'Name': req.body.Name, 'Password': req.body.Password };
    b = Buffer(req.body.Name);
    arr.push(user);
    res.send('Created').status(201);
})

app.post('/login', (req, res) => {
    if (arr.some(e => e.Name === req.body.Name && e.Password === req.body.Password)) {
        b = Buffer(req.body.Password);
        res.cookie(req.body.Name, b, { maxAge: 900000, httpOnly: true });
        res.status(200).json({ Name: req.body.Name });
    }
    else {
        res.status(404).send('No such user.');
    }
})

app.get('/logout', (req, res) => {
    res.clearCookie(req.query.name);
    res.status(200).send('LogOut');
})

app.delete('/delete', (req, res) => {
    res.clearCookie(req.query.name);
    arr = arr.filter((e) => {
        console.log(e.Name)
        e.Name !== req.query.name
    });
    res.status(200).send('Deleted');
})

app.listen(port);