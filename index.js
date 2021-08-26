const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {Router} = require('express');
const router = Router();
const session = require('express-session');
const varMiddleware = require('./middleware/variables')
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: false,
}))
app.use(varMiddleware)


router.post('/login', async (req, res) => {
    req.session.isAuthenticated = true;
    console.log(req.body);
})

router.get('/logout', async (req, res) => {
    res.session.destroy(()=>{
        console.log('Session destroyed');
    }); 
    res.session.isAuthenticated = false;
})

router.get('/lexa', async (req, res) => {
    res.redirect('/');
})


async function start() {
    try {
        // await mongoose.connect('mongodb+srv://Mario210:2009747557d1D1@cluster0.jeg3c.mongodb.net/shop', {
        //     useNewUrlParser: true,
        //     useFindAndModify: false
        // })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()