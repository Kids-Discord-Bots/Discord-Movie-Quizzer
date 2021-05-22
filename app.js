const express = require('express')
const cecho = require("./commands/test/cecho.js")
const { progress } = require("./config/config.json")
const app = express()
const port = 8080;
app.use(express.static('wwwroot'))


// -----------------------------------
// GET
// -----------------------------------

// get index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/wwwroot/')
})

// get received
app.get('/GET/', function (req, res) {
    res.send("GET received")
})

// get progress
app.get('/GET/progress', function (req, res) {
    res.send(progress)
})

// get cecho
app.get('/GET/cecho/', function (req, res) {
    if (cecho.to_send !== "") {
        res.send(cecho.to_send)
        cecho.to_send = ""
    } else {
        res.send("GET received")
    }
})
// -----------------------------------



// -----------------------------------
// Post
// -----------------------------------

// post received
app.post('/POST/', function(req, res) {
    res.send("POST received")
})
// -----------------------------------



// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------
