const {User} = require('../models/index');

class userController {
    static showRegisterPage(req, res) {
        res.render('./users/register');
    }

    static registerUser(req, res) {
        User.create(req.body).then(() => {
            res.redirect('/');
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
            console.log(user);
            if (user) {
                req.session.user = {
                    username:req.body.username,
                    password:req.body.password
                }
                console.log(req.session.user);
                res.redirect(`/${req.body.username}/products`);
            } else {
                res.redirect('/users/login');
            }
        }).catch((err) => {
            res.send(err.message);
        });
    }

    
}

module.exports = userController;