const express= require('express');
const app = express();
const bodyparser= require('body-parser');
const cors= require('cors');
const mongoClient=require("mongodb");
const url="mongodb://localhost:27017";

var mydata=[];
app.use(cors());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: true}));

app.get('/',function(req,res){
  res.json(mydata);
});

app.post('/users',function(req,res){

 //storing data in db

mongoClient.connect(url,function(err,client){
  if(err) throw err;
  var db = client.db("customerdb");
  db.collection("user").insertOne(req.body,function(err,data){
    if(err) throw err;
    client.close();
    res.json({
      message:"saved"
    })
  })
})

  console.log(req.body);
});

app.put('/users-update',function(req,res){

 //storing data in db

mongoClient.connect(url,function(err,client){
  if(err) throw err;
  var db = client.db("customerdb");
  db.collection("user").updateOne({email: req.body.email},{$set:{firstname: req.body.firstname,lastname: req.body.lastname}},function(err,data){
    if(err) throw err;
    client.close();
    res.json({
      message:"updated"
    })
  })
})

  console.log(req.body);
});

app.delete('/users-delete',function(req,res){

 //storing data in db

mongoClient.connect(url,function(err,client){
  if(err) throw err;
  var db = client.db("customerdb");
  db.collection("user").deleteOne({email: req.body.email},function(err,data){
    if(err) throw err;
    client.close();
    res.json({
      message:"deleted"
    })
  })
})

  console.log(req.body);
});




app.listen(4040);
