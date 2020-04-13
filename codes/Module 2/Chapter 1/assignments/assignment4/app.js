var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
function add() {
    var c = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}
function sub() {
    var c = parseInt(t1.value) - parseInt(t2.value);
    t3.value = c.toString();
}
function mul() {
    var c = parseFloat(t1.value) * parseFloat(t2.value);
    t3.value = c.toString();
}
function div() {
    var c = parseFloat(t1.value) / parseFloat(t2.value);
    t3.value = c.toString();
}
function sin() {
    var x = parseFloat(t1.value);
    var y = (Math.PI / 180) * x;
    var c = Math.sin(y);
    t3.value = c.toString();
}
function cos() {
    var x = parseFloat(t1.value);
    var y = (Math.PI / 180) * x;
    var c = Math.cos(y);
    t3.value = c.toString();
}
function tan() {
    var x = parseFloat(t1.value);
    var y = (Math.PI / 180) * x;
    var c = Math.tan(y);
    t3.value = c.toString();
}
function sqroot() {
    var c = Math.sqrt(parseInt(t1.value));
    t3.value = c.toString();
}
function power() {
    var c = Math.pow(parseInt(t1.value), parseInt(t2.value));
    t3.value = c.toString();
}
//# sourceMappingURL=app.js.map