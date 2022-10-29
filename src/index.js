const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send({
    "slackUsername":"Zykson",
    "backend":true,
    "age":26,
    "bio":"my name is Isaac, i go by zyk and I am aspiring to be fullstack developer"
  })
})

app.listen({port: process.env.PORT || 4000}, () => {
  console.log(`HNG9 we live!!!`)
})
