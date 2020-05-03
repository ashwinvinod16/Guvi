class cat{
    name;
    constructor(catname:string){
        this.name=catname;
        let image= document.createElement('img');
        document.body.appendChild(image);
        image.src="http://pngimg.com/uploads/cat/cat_PNG50550.png";
        image.onclick= this.catonclick()
    }
    catonclick=()=>{
        return ()=>{
            alert(`the ${this.name} is clicked`)
        }
    }

}



class dog{
  name;
  constructor(dogname:string){
    this.name= dogname;
    let image= document.createElement('img');
    document.body.appendChild(image);
    image.src="http://pngimg.com/uploads/dog/dog_PNG50348.png";
    image.onclick= this.dogonclick()
  }
  dogonclick=()=>{
    return ()=>{
        alert(`the ${this.name} is clicked`)
    }
}
}



let catclick = ()=>{
    let catname= prompt("enter the name");
    new cat(catname);
}

let dogclick=()=>{
    let dogname= prompt("enter the name");
    new dog(dogname);
}