const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/index.html", function (req, res) {
  res.sendFile(__direname + "/index.html");
});

app.post('/index.html', (req, res) => {

  var weight = parseFloat(req.body.weight);
  var cgrams = parseFloat(req.body.cgrams);
  var result1 =  weight*6 ;
  var result2 = if (result1 > cgrams) { 
    result2 = "over";
  } else {
    result2 = "under";
  }
  res.send("Your limit of caffeine per day is" + " " + result1 + " " + "mg. You are currently" + " " + result2 + " " + "your daily limit".)
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});