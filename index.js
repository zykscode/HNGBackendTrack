const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    "slackUsername":"Zykson",
    "backend":true,
    "age":26,
    "bio":"my name is Isaac, i go by zyk and I am aspiring to be fullstack developer"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})