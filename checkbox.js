
function makeCheckbox(parentNode ,key,value,options) {
    self = this;
    var options = options || {};
    parentNode.innerHTML = '';
    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.checked = value;
    this.checkbox.value = value;
    this.checkbox.onchange = function () {
        this.value === 'false' ? this.value = true : this.value = false;
    }
    parentNode.appendChild(this.checkbox);
}
