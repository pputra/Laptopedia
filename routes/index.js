const userRoutes = require('./usersRoutes');
const router = require('express').Router();
const productRoutes = require('./productRoutes');
const UserController = require('../controllers/userController');
const isLogin = require('../helpers/isLogin');


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/register', UserController.showRegisterPage);
router.post('/register', UserController.registerUser);

router.get('/login',UserController.showLoginPage);
router.post('/login', UserController.login);    

router.use('/users', function(req, res, next) {
    
    isLogin(req, res, next);
    
}, userRoutes );

router.use('/products', function (req, res, next) {
   
    isLogin(req, res, next);

}, productRoutes );

module.exports = router;