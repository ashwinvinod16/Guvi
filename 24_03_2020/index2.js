const express= require('express');
const app = express();
const bodyparser= require('body-parser');
const cors= require('cors');

var mydata=[];
app.use(cors());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: true}));

app.get('/',function(req,res){
  res.json(mydata);
});
app.post('/users',function(req,res){

  mydata.push(req.body);
  console.log(req.body);
  res.json({
    "message": "success"
  })
});




app.listen(4000);
