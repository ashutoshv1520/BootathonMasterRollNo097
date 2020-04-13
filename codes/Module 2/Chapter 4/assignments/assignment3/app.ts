function dynamic():void {

    var input:HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
    var table:HTMLTableElement = <HTMLTableElement>document.getElementById("table_1");

    var count:number = 1;
    var num:number = +input.value;

    while( table.rows.length > 1)   {
        table.deleteRow(1);
    }

    for(count=1 ; count<=num ; count++) {

        var row:HTMLTableRowElement = table.insertRow();
        var cell:HTMLTableDataCellElement = row.insertCell();

        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = count.toString();
        cell.appendChild(text);


        var cell:HTMLTableDataCellElement = row.insertCell();

        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = "*";
        cell.appendChild(text);

        var cell:HTMLTableDataCellElement = row.insertCell();

        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = (num).toString();
        cell.appendChild(text);

        var cell:HTMLTableDataCellElement = row.insertCell();

        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = "=";
        cell.appendChild(text);
        
        var cell:HTMLTableDataCellElement = row.insertCell();

        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.style.textAlign = "center";
        text.value = (count*num).toString();
        cell.appendChild(text);
    }

}