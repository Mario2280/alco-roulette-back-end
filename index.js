const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => res.send("asdasd"));
app.post('/auth/login', (req, res) => {
    res.send("AAAAAAAAAAAAsdsadasd", req.body);
    console.log(req.body);
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));