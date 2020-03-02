const mydiv1=document.createElement('div');
const mydiv2=document.createElement('div');
const btn=document.createElement('button');
document.body.appendChild(btn);
document.body.appendChild(mydiv1);
document.body.appendChild(mydiv2);
mydiv1.textContent="I am Div 1";
mydiv2.textContent="I am Div 2";
btn.textContent="click me"
function change(){
     temp =mydiv1.textContent;
     mydiv1.textContent=mydiv2.textContent;
     mydiv2.textContent=temp
}
const btn1=document.querySelector('button')
btn1.onclick=change;