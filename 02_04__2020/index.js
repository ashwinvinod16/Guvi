var cat = /** @class */ (function () {
    function cat(catname) {
        var _this = this;
        this.catonclick = function () {
            return function () {
                alert("the " + _this.name + " is clicked");
            };
        };
        this.name = catname;
        var image = document.createElement('img');
        document.body.appendChild(image);
        image.src = "http://pngimg.com/uploads/cat/cat_PNG50550.png";
        image.onclick = this.catonclick();
    }
    return cat;
}());
var dog = /** @class */ (function () {
    function dog(dogname) {
        var _this = this;
        this.dogonclick = function () {
            return function () {
                alert("the " + _this.name + " is clicked");
            };
        };
        this.name = dogname;
        var image = document.createElement('img');
        document.body.appendChild(image);
        image.src = "http://pngimg.com/uploads/dog/dog_PNG50348.png";
        image.onclick = this.dogonclick();
    }
    return dog;
}());
var catclick = function () {
    var catname = prompt("enter the name");
    new cat(catname);
};
var dogclick = function () {
    var dogname = prompt("enter the name");
    new dog(dogname);
};
