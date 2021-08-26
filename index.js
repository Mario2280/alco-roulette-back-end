const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get('/', (req, res) => {
    console.log(req.body);
    res.send("asdasd")
});
app.post('/auth/login', (req, res) => {
    console.log(req.body);
    res.send(`aaaaaasdasd`);    
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));