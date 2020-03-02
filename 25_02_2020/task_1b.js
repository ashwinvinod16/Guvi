//convert all country names into capital

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function() {
 
 var arr = JSON.parse(this.response)
 console.log("*************using map function***********");
 function convert(cap){
   return cap.name.toUpperCase();
 }
 var abc=arr.map(convert)
 console.log(abc)

 console.log("***************** using loop*************");
 
 for(var i=0;i<arr.length;i++){
    console.log(arr[i].name.toUpperCase());
 }
} 