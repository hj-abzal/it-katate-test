const express = require('express')
const path = require('path')

const PORT = 8080;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/it-karate', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`server works on port: ${PORT}`)
})