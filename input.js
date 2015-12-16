
function makeInput(parentNode ,name,value,options) {
    self = this;
    var options = options || {};
    parentNode.innerHTML = '';
    this.input = document.createElement('input');
    typeof (value) == 'int' ? this.input.type = 'number' : this.input.type = 'text';
    this.input.name = name;
    this.input.value = value;
    this.input.maxLength = options.maxlength;
    parentNode.appendChild(this.input);
}
