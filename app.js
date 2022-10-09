const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"))
})

app.get('/fullcalendar/main.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'node_modules/fullcalendar/main.css'))
})

app.get('/fullcalendar/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'node_modules/fullcalendar/main.js'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})