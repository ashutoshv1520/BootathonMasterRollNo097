//initializing variables for matrix a
var n = parseInt(prompt("Enter the no. of rows of first martrix:"));
var m = parseInt(prompt("Enter the no. of columns of first matrix:"));
var a = [];
//getting values for matrix a
a = enterval(n, m);
//caling printing function for matrix a
var x = "id1";
printfun(n, m, a, x);
//initializing variables for matrix b
var n1 = parseInt(prompt("Enter the no. of rows of second martrix:"));
var m1 = parseInt(prompt("Enter the no. of columns of second matrix:"));
var b = [];
//getting values for matrix b
b = enterval(n1, m1);
//caling printing function for matrix b
var y = "id2";
printfun(n1, m1, b, y);
//Error handling:checking if multiplication is possible or not
if (m != n1) {
    alert("multiplication not possible!!!");
}
else {
    var z = "id3";
    //calling multiplication funtion
    mul(a, b, n, m, n1, m1, z);
}
//function to calculate and print result using values from matrix a and b
function mul(a1, b, n, m, n1, m1, id) {
    var sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m1; j++) {
            for (let k = 0; k < n1; k++) {
                sum = sum + a[i][k] * b[k][j];
            }
            document.getElementById(id).innerHTML += sum + " ";
            sum = 0;
        }
        document.getElementById(id).innerHTML += "<br>";
    }
}
//function to get values from user
function enterval(n, m) {
    var arr = [];
    if (isNaN(n) || isNaN(n)) {
        alert("Enter only valid Numbers");
        location.reload();
    }
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = parseInt(prompt("enter elment:"));
        }
    }
    return arr;
}
//funtion for printing matrices
function printfun(n, m, arr, id) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            document.getElementById(id).innerHTML += arr[i][j] + " ";
        }
        document.getElementById(id).innerHTML += "<br>";
    }
}
//# sourceMappingURL=app.js.map