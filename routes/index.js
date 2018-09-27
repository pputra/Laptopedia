const userRoutes = require('./usersRoutes');
const router = require('express').Router();
const productRoutes = require('./productRoutes');
const UserController = require('../controllers/userController');


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/register', UserController.showRegisterPage);
router.post('/register', UserController.registerUser);

router.get('/login',UserController.showLoginPage);
router.post('/login', UserController.login);    

router.use('/users', function(req, res, next) {
    console.log('masuk');
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}, userRoutes );

router.use('/products', function (req, res, next) {
    console.log('masuk');
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }

}, productRoutes );

module.exports = router;