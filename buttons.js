
function makeButton(parentNode ,value,options) {
    self = this;
    var options = options || {};
    parentNode.innerHTML = '';
    this.button = document.createElement('button');
    this.button.type = 'button';
    var t = document.createTextNode("X");       // Create a text node
    button.appendChild(t);
    parentNode.appendChild(this.button);

}


