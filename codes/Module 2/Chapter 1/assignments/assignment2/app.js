var x01 = document.getElementById("x1");
var y01 = document.getElementById("y1");
var x02 = document.getElementById("x2");
var y02 = document.getElementById("y2");
var x03 = document.getElementById("x3");
var y03 = document.getElementById("y3");
var t1 = document.getElementById("t1");
function area() {
    //variables initialed
    var x1 = parseFloat(x01.value);
    var y1 = parseFloat(y01.value);
    var x2 = parseFloat(x02.value);
    var y2 = parseFloat(y02.value);
    var x3 = parseFloat(x03.value);
    var y3 = parseFloat(y03.value);
    //calculate length sides a,b,c
    var a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var b = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    var c = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
    //calculate semiperimeter s
    var s = (a + b + c) / 2;
    //calculate area
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    //print area
    t1.value = area.toString();
}
//# sourceMappingURL=app.js.map