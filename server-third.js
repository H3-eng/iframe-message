const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'pageThird')))

app.listen(8083, () => {
  console.log('App listening at port 8083')
})