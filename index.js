var body_parser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const token = 'dsjfv2moi42fm4vim433v2';
var urlencodedParcer = body_parser.urlencoded({extended: false});
var JSONparser = body_parser.json();
app.post('/auth/token', urlencodedParcer, (req, res) => {
    try{
      console.log(req.body);
    if(req.body == token){
      res.send(true);
    } else{
      res.send(false);
    }
  } catch(e){throw e}
});
app.post('/auth/login', JSONparser, (req, res) => {
  console.log(req.body.login, req.body);  
  if(req.body.login == 'admin' && req.body.password == 'admin'){
      res.send(token);
    }  else{
      res.status(724).send();
    }
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));