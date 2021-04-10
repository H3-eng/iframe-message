const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'pageFour')))

app.listen(8084, () => {
  console.log('App listening at port 8084')
})