const express = require('express')
const app = express()
const routes =require('./routes/index')
const port = 1234

app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use('/',routes)

app.listen(port,()=>{
    console.log(`connected form port ${port}`)
})