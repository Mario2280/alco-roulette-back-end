const {
    Router
} = require('express')
const router = Router()
const User = require('../models/user')
//const bcrypt = require('bcryptjs')

router.get('/login', (req, res) => {
    res.render('index', {})
})
router.post('/token', (req, res) => {
    if(req.body == 'l3rfj3rni22hr4ofun2vt49uo24hvo2gt48t432gt'){
        res.send(true);
    } else {
        res.send(false);
    }
})
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        if(user.password == password){
            req.session.user = user;
            req.session.token = 'l3rfj3rni22hr4ofun2vt49uo24hvo2gt48t432gt';
            req.session.save(err => {
            if(err){
                throw err
            }
            res.body = 'l3rfj3rni22hr4ofun2vt49uo24hvo2gt48t432gt';
            res.render('result',{
                isAuth: true 
            })
            })
        }
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login')
    })
})

router.post('/register', async (req, res) => {
    try {
        const {
            email,
            password,
            confirm,
            name
        } = req.body;
        const candidate = await User.findOne({
            email
        });
        if (candidate) {
            res.render('result', {
                isSuc: false
            });
        } else {
            const user = new User({
                email,
                name,
                password
            });
            await user.save();
            res.render('result', {
                isSuc: true
            })
        }
    } catch (e) {
        console.log(e);
    }
})

module.exports = router