const mydiv=document.createElement('div')
document.body.appendChild(mydiv)
const image=document.createElement('img')
mydiv.appendChild(image)
image.src="/Users/ashwinvinod/Desktop/image1.jpg";
image.style.width="100%";
image.style.height=500;
const div1=document.createElement('div')
const img1=document.createElement('img')
const img2=document.createElement('img')
const img3=document.createElement('img')
document.body.appendChild(div1)
div1.appendChild(img1)
div1.appendChild(img2)
div1.appendChild(img3)
//arr=["/Users/ashwinvinod/Desktop/image1.jpg","/Users/ashwinvinod/Desktop/image3.jpg","/Users/ashwinvinod/Desktop/image5.jpg"]
img1.src="/Users/ashwinvinod/Desktop/image1.jpg";
img2.src="/Users/ashwinvinod/Desktop/image3.jpg";
img3.src="/Users/ashwinvinod/Desktop/image5.jpg";
img1.style.width="33%"
img2.style.width="33%"
img3.style.width="33%"
img1.style.height=img2.style.height=img3.style.height=300
img1.onclick=click1;
img2.onclick=click2;
img3.onclick=click3;
function click1(){
    image.src=img1.src;
}
function click2(){
    image.src=img2.src;
}
function click3(){
    image.src=img3.src;
}