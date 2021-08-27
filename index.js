const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
  collection: "sessions",
  uri: 'mongodb+srv://Mario210:2009747557d1D1@cluster0.jeg3c.mongodb.net/lexaApp'
});
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth')
const varMiddleware = require('./middleware/variables')
const path = require('path');
const PORT = process.env.PORT || 5000;

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
  })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({
  extended: true
}))

app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false,
  store
}))
app.use(varMiddleware)
app.use('/auth', authRoutes);
// app.use(express.json());
// app.get('/', (req, res) => {
//     console.log(req.body);
//     res.send("asdasd")
// });
// app.post('/auth/login', (req, res) => {
//     console.log(req.body);
//     res.send(`aaaaaasdasd`);    
// });

async function start(){
    try{
        await mongoose.connect('mongodb+srv://Mario210:2009747557d1D1@cluster0.jeg3c.mongodb.net/lexaApp', {
            useNewUrlParser: true,
            //useFindAndModify: false
          });
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    } catch(e){
        console.log(e)
    }
}

start()
