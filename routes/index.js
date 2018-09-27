const userRoutes = require('./usersRoutes');
const router = require('express').Router();
const productRoutes = require('./productRoutes');

router.get('/',(req,res)=>{
    res.render('index')
})

router.use('/users', userRoutes );

router.use('/:username/products', productRoutes );

module.exports = router;