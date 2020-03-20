var apikey = "f93a0ff28be85bf3c0a81d3a6165ff9e";


var myFetch = fetch("https://restcountries.eu/rest/v2/all");

myFetch.then(function(data){
  return data.json();
}).then(function(finalvalue){
  //console.log(finalvalue);
  var table = document.getElementById("myTable");
  for(var i=0;i<finalvalue.length;i++){

    if(finalvalue[i].capital!=''){

      var url="http://api.openweathermap.org/data/2.5/weather?q="+finalvalue[i].capital+"&appid="+apikey;
      var temp=fetch(url);

      temp.then(function(list){
          return list.json();
      })
      .then(function(weather){
        if(weather.name!=undefined){
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = weather.name;
        cell2.innerHTML = weather.main.temp;
       }

      }).catch((err)=>{
        console.log();
      })
   }
  }
}).catch(function(err){
  console.log(err);
})
