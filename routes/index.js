const userRoutes = require('./usersRoutes');
const router = require('express').Router();
const productRoutes = require('./productRoutes');


router.get('/',(req,res)=>{
    res.render('index')
})

router.use('/users', userRoutes );

router.use('/:username/products', function (req, res, next) {
    console.log('aku ada session', req.session.user)
    if (req.session.user) {
        next();
    } else {
        res.redirect('/users/login');
    }

    
}, productRoutes );

module.exports = router;