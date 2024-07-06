const express = require('express');
var bodyParser = require('body-parser')
const fs = require('fs');

const app = express();
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getbuffer', (req, res) => {
    let buffer1 = Buffer.from(req.query.input1);
    let buffer2 = Buffer.from(req.query.input2);
    let buffer3 = Buffer.from(req.query.input3);
    let buffer4 = Buffer.from(req.query.input4);
    let buffer5 = Buffer.from(req.query.input5);
    let buffer6 = Buffer.concat([buffer1, buffer2,buffer3,buffer4,buffer5]);
    let json = buffer6.toJSON(); 
    json = json.data.slice(0,1000);
    console.log(json)
    fs.writeFileSync('output.txt', String.fromCharCode(...json), 'utf8');
    res.json(json);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})