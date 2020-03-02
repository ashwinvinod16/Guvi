//print capital whose length is less than 5
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function() {
 
 var arr = JSON.parse(this.response)

  console.log("*********using loop**********");
 for(var i=0;i<arr.length;i++){
    if(arr[i].capital.length<5 && arr[i].capital.length!=0){
        console.log(arr[i].capital);
    }
 }

 console.log("********************output using filter******************"); 


 function length(len){
    if(len.capital.length<5 && len.capital.length!=0){
        return len.capital;
    }
 }
 var cap=arr.filter(length);
 for(var i=0;i<cap.length;i++){
     console.log(cap[i].capital);
 }
}