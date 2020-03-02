const mydiv=document.createElement('div');
mydiv.textContent="User Name: ";
document.body.appendChild(mydiv);
const user=document.createElement('input');
user.type="text";
mydiv.appendChild(user);
const mydiv1=document.createElement('div');
mydiv1.textContent="Password: ";
document.body.appendChild(mydiv1);
const pass=document.createElement('input');
pass.type="text";
mydiv1.appendChild(pass);
const btn=document.createElement('button');
document.body.appendChild(btn);
btn.textContent="Sumbit";
function validate(){
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.value)){
        alert("Invalid Email address");
    }
    if(pass.value.length!=8){
        alert("Invalid password ");
    }
}
const btn1=document.querySelector('button');
btn1.onclick=validate;