const ProductRoute = require("./products/")
const routes = require('express')()

routes.use('/',(req,res)=>{
    res.render('index')
})

module.exports = routes