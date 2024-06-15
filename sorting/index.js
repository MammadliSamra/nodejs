const express = require('express')
const cors = require('cors');
const workersRoutes = require('./workers')

const app = express()
const port = 3000

app.use(cors())

app.use('/workers', workersRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})