
function makeImg(parentNode ,name,value,options) {
    self = this;
    var options = options || {};
    parentNode.innerHTML = '';
    this.img = document.createElement('img');
    this.img.name = name;
    this.img.src = value;
    parentNode.appendChild(this.img);
}
