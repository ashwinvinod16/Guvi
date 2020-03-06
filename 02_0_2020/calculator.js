var opr,i=0;
var num=[0,0];
function dis(val){
    document.getElementById("result").value+=val
    if (val=='+'||val=="-"||val=='*'||val=='/'){
        opr=val;
        i++;
    }
    else{
       num[i]+=val;
    }
}
function operate(){
    num[0]=parseInt(num[0])
    num[1]=parseInt(num[1])
    if (opr=='+')
      document.getElementById('result').value=parseInt(num[0]+num[1])
    else if(opr=='-')
      document.getElementById('result').value=parseInt(num[0]-num[1]) 
    else if(opr=='*')  
      document.getElementById('result').value=parseInt(num[0]*num[1]) 
    else if(opr=='/')
      document.getElementById('result').value=parseInt(num[0]/num[1]) 
}
function clear(){
    document.getElementById('result').value=0;
}