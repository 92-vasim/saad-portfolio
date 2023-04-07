const express = require('express')
const app = express()
const port = 3080

app.use(express.static('views'))
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index', {"name": "Saad"})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
