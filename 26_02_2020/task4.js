const img1=document.createElement('img');
document.body.appendChild(img1);
img1.width=500;
img1.height=500;
var count=0
arr=["/Users/ashwinvinod/Desktop/image1.jpg","/Users/ashwinvinod/Desktop/image2.jpeg","/Users/ashwinvinod/Desktop/image3.jpg","/Users/ashwinvinod/Desktop/image4.jpeg","/Users/ashwinvinod/Desktop/image5.jpg"];
img1.src=arr[0];
function change(){
    count+=1
    count=count%arr.length;
    img1.src=arr[count]
}
img1.onmouseover=change;