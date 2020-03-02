//Convert all the strings to title caps in a string array
var stringarr=["ashwin","ashiq","bilal","tiger"]
var change=(stringarr)=>{
    for(var i=0;i<stringarr.length;i++){
        console.log(stringarr[i].charAt(0).toUpperCase()+stringarr[i].substr(1));
      
    }
} 
change(stringarr); 