const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'pageOne')))

app.listen(8081, () => {
  console.log('App listening at port 8081')
})