
function makeTable(parentNode, data, options) {
    self = this;
    var options = options || {};
    parentNode.innerHTML = '';
    this.table = document.createElement('table');
    this.table.className = "sortable";
    this.header = this.table.createTHead();
    var row = this.header.insertRow(0);
    var tb = document.createElement("tbody");
    this.table.appendChild(tb);
    // Create an empty <tr> element and add it to the first position of <thead>:
    for (var i = 0; i < data.length; i++) {
        // get row
        var Row = data[i];
        var tbRow = tb.insertRow(i);

            // get value and prop of row
        for (var key in Row) {
                var value = Row[key];
                var prop = key;
                // check if row 0 header row and add prop instead of value
                if (i === 0) {
                    var cell = row.insertCell();
                    cell.innerHTML = prop;
                    // if id hidden
                    var cell = tbRow.insertCell();
                    cell.innerHTML = value;
                    options.editable === true ? makeInput(cell, key, value) : cell.innerHTML = value;
                    typeof (value) == 'boolean' ? makeCheckbox(cell, key, value) : null;
                    options.hidden == prop ? cell.style.display = 'none' : cell.style.display = '';
                    key === 'img' ? makeImg(cell, key, value) : null;

                } else {
                    var cell = tbRow.insertCell();
                    options.editable === true ? makeInput(cell, key, value) : cell.innerHTML = value;
                    typeof (value) == 'boolean' ? makeCheckbox(cell,key, value) : null;
                    key === 'img' ? makeImg(cell, key, value) : null;
                    options.hidden == prop ? cell.style.display = 'none' : cell.style.display = '';
                    options.maxLength === true ? makeInput(cell, key, value) : cell.innerHTML = value;

                }
            }
            if (options.del === true) {
                    var cell = tbRow.insertCell();
                    makeButton(cell);
            }

    }
    sorttable.makeSortable(this.table);
    parentNode.appendChild(this.table);
    }
