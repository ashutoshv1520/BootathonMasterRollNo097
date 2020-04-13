var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
function calc() {
    var x = parseFloat(t1.value);
    var c = (Math.PI / 180) * x;
    var ans = x + Math.cos(c);
    t2.value = ans.toString();
}
//# sourceMappingURL=app.js.map