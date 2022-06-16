const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/pdf', express.static(__dirname + '/cvfrontendalejandro.pdf'));

app.listen( process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})