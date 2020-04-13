function dynamic() {
    var input = document.getElementById("t1");
    var table = document.getElementById("table_1");
    var count = 1;
    var num = +input.value;
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    for (count = 1; count <= num; count++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        var text = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = count.toString();
        cell.appendChild(text);
        var cell = row.insertCell();
        var text = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = "*";
        cell.appendChild(text);
        var cell = row.insertCell();
        var text = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = (num).toString();
        cell.appendChild(text);
        var cell = row.insertCell();
        var text = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = "=";
        cell.appendChild(text);
        var cell = row.insertCell();
        var text = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = (count * num).toString();
        cell.appendChild(text);
    }
}
//# sourceMappingURL=app.js.map