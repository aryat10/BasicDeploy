require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Aryat!')
})

app.get('/twitter',(req,res)=> {
    res.send('aryatcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Welcome to Login Page for Express</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})