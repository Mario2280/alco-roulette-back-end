const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const token = 'dsjfv2moi42fm4vim433v2';
app.use(express.json());
app.post('/auth/token', (req, res) => {
    console.log(req.body)
    if(req.body == token){
      res.send(true);
    } else{
      res.send(false);
    }
});
app.post('/auth/login', (req, res) => {
  console.log(req.body.login, req.body);  
  if(req.body.login == 'admin' && req.body.password == 'admin'){
      res.send(token);
    }  else{
      res.status(724).send();
    }
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));