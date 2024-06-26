const express = require('express');
const fs = require('fs');
const multer = require('multer');

app = express();

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

let files = [];

const imageExtensions = [
    'png', 'avif', 'gif', 'jpg', 'jpeg', 'jfif', 'pjp', 'svg', 'webp'
];

function readFiles(dirname) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            console.log(err.message);

            return;
        }

        filenames.forEach(filename => {
            let fileNameParts = filename.split('.');

            let extension = fileNameParts[fileNameParts.length - 1];

            if (imageExtensions.includes(extension)) {
                files.push({
                    name: filename,
                    extension: extension
                });
            }
        });
    });
}

readFiles('public/');

app.get('/Get', async (req, res) => {
    res.json(files);
});

app.post('/upload', upload.array('myfile'), async (req, res) => {
    req.files.forEach(file => {
        files.push({
            name: file.filename,
            extension: file.mimetype.split('/')[1]
        });
    });

    res.redirect('/');
});



app.listen(3000);