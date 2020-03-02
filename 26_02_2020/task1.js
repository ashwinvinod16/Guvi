const mydiv =document.createElement('div');
document.body.appendChild(mydiv)
mydiv.textContent="Welcome";
function change(){
    document.body.style.background='red';
}
function revert(){
    document.body.style.background='white';
}
mydiv.onmouseover=change;
mydiv.onmouseout=revert;