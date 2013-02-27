var express = require('express');
var app = express();
// this enables jsonp support
app.enable("jsonp callback");
app.set('jsonp callback name', 'cb');

app.get('/', function(req, res){
  res.jsonp({id:123, message:'Thank you for your JSONP get'});
});

app.listen(3000);