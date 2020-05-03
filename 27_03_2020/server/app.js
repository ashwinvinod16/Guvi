const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoClient = require("mongodb");
const url = "mongodb://localhost:27017";
const bcrypt = require("bcrypt")
const saltRounds = 10;
var jwt = require('jsonwebtoken');


app.use(cors());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
  extended: true
}));

//middeleware for token verification

function authenticate(req,res,next){
   //if token is present
   // if token is valid
   // if token doesnot expire
   // then next
   //console.log(req.header('Authorization'));
   if(req.header('Authorization')==undefined){
     res.status(401).json({
       message: "unauthorised"
     })
   }
   else{
     var decode = jwt.verify(req.header('Authorization'),'ashwinvinod')
     console.log(decode);
     if(decode!==undefined)
       next();
     else{
       res.status(401).json({
         message: "unauthorised"
       })
     }
   }

  next();
}

//user registration password hashing stored the hashed password into the db

app.post("/user-registration", function(req, res) {
  // var newData = {
  //   name: req.body.firstname,
  //   email: req.body.email
  // }

  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      if (err) throw err;
      // newData.password = hash;
      req.body.password=hash;
      mongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var db = client.db("customerdb");
        db.collection("user").insertOne(req.body, function(err, data) {
          if (err) throw err;
          client.close();
          res.json({
            message: "saved"
          })
        })
      })
    })
  })
})

//login ....password compared with hashed password stored in db

app.post("/user-login", function(req, res) {
  mongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db("customerdb");
    db.collection("user").findOne({  email: req.body.email}, function(err, userdata) {
      if (err) throw err;

      client.close();

      //console.log(userdata);
      //comparing passsword

      bcrypt.compare(req.body.password,userdata.password,function(err,result){
        console.log(result);
        if(result){
          //console.log(userdata._id);

          //token creation
          var jwttoken= jwt.sign({ id : userdata._id}, 'ashwinvinod',{expiresIn: '1d'});
          console.log(jwttoken);

          res.json({
            message: "success",
            token : jwttoken
          })
        }
        else{
            res.status(500).json({
              message:"error"
            })
          }

      })
    });
  });
});

app.get('/dashboard',authenticate,function(req,res){
  res.json({
    message: "protected"
  })
})

//Access to the user information

app.get("/dashboard-user",function(req,res){
  var decode = jwt.verify(req.header('Authorization'),'ashwinvinod');
  mongoClient.connect(url, function(err, client) {
    if (err) throw err;

    var db = client.db("customerdb");
    var ObjectId = require('mongodb').ObjectID;
    db.collection("user").findOne({_id: ObjectId(decode.id)}, function(err, userdata1) {
      if (err) throw err
      client.close();

      res.json({
        userdata : userdata1
      })

  })


 })
})





app.listen(4040, function() {
  console.log("connected to port 4040")
});
