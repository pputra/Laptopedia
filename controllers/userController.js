const {User} = require('../models/index');

class userController {
    static showRegisterPage(req, res) {
        res.render('./users/register');
    }

    static registerUser(req, res) {
        User.create(req.body).then(() => {
            res.redirect('/login');
        }).catch((err) => {
            res.send(err.message);
        });
    }

    static showLoginPage(req, res) {
        res.render('./users/login');
    }

    static login(req, res) {
        User.findOne({
            where:{
                username:req.body.username,
                password:req.body.password
            }
        }).then((user) => {
            console.log('masuk');
            if (user) {
                req.session.user = {
                    username:user.username,
                    id:user.id
                }
                console.log(req.session.user);
                res.redirect(`/products`);
            } else {
                console.log('masuk');
                res.redirect('/login');
            }
        }).catch((err) => {
            res.send(err.message);
        });
    }

    static logout(req, res) {
        req.session.user.username = null;
        req.session.user.id = null;
        res.redirect('/');
    }

    
}

module.exports = userController;