var x01 = document.getElementById("x1");
var y01 = document.getElementById("y1");
var x02 = document.getElementById("x2");
var y02 = document.getElementById("y2");
var x03 = document.getElementById("x3");
var y03 = document.getElementById("y3");
var x04 = document.getElementById("x");
var y04 = document.getElementById("y");
function check() {
    //variables initialed
    var x1 = parseFloat(x01.value);
    var y1 = parseFloat(y01.value);
    var x2 = parseFloat(x02.value);
    var y2 = parseFloat(y02.value);
    var x3 = parseFloat(x03.value);
    var y3 = parseFloat(y03.value);
    var x = parseFloat(x04.value);
    var y = parseFloat(y04.value);
    //calculate areas
    var abc = Math.abs((x1 * (y2 - y1) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
    var pab = Math.abs((x * (y2 - y3) + x2 * (y3 - y) + x3 * (y - y2)) / 2);
    var pbc = Math.abs((x1 * (y - y3) + x * (y3 - y1) + x3 * (y1 - y)) / 2);
    var pac = Math.abs((x1 * (y2 - y) + x2 * (y - y1) + x * (y1 - y2)) / 2);
    //calculate sum
    var s = pab + pbc + pac;
    if (Math.abs(abc - s) < 0.00001) {
        document.getElementById("display").innerHTML = "<br><b>Point is inside triangle.</b>";
    }
    else {
        document.getElementById("display").innerHTML = "<br><b>Point is not inside triangle.</b>";
    }
}
//# sourceMappingURL=app.js.map