const express = require('express')
require('dotenv').config()
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Welcome in Twitter')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login Twitter</h1>')
})

app.get('/logout',(req,res)=>{
    res.send('<h1>Logout Twitter</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})