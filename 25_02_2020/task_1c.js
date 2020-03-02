// find details of particular country
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function() {
 
 var arr = JSON.parse(this.response)
 console.log("********using loop********")
 for(var i=0;i<arr.length;i++){
    if(arr[i].name=="India"){
        console.log(arr[i]);
    }
 }

 console.log("**********with using find************")
 function check(country){
    if(country.name=="India"){
        return country;
    }
 }
 var out=arr.find(check)
 console.log(out);
} 