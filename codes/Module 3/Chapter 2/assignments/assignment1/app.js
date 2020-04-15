var f1 = document.getElementById("m1");
var f2 = document.getElementById("m2");
var an1 = document.getElementById("a1");
var an2 = document.getElementById("a2");
function check(x) {
    if (isNaN(x)) {
        alert("Invalid entry!!!");
    }
}
function enterval() {
    var m1 = parseFloat(f1.value);
    var m2 = parseFloat(f2.value);
    var a1 = parseFloat(an1.value);
    var a2 = parseFloat(an2.value);
    check(m1);
    check(m2);
    check(a1);
    check(a2);
    calc(m1, m2, a1, a2);
}
function calc(f1, f2, a1, a2) {
    var fx = f1 * Math.cos((Math.PI / 180) * a1) + f2 * Math.cos((Math.PI / 180) * a2);
    var fy = f1 * Math.sin((Math.PI / 180) * a1) + f2 * Math.sin((Math.PI / 180) * a2);
    //calculating magnitude of resultant
    var r = Math.abs(Math.sqrt(((Math.pow(fx, 2)) + (Math.pow(fy, 2)))));
    //calculating angle of resultant
    var an = (Math.atan2(fy, fx) * 180 / Math.PI);
    printfun(r, an);
}
function printfun(mag, ang) {
    document.getElementById("id1").innerHTML = "Resultant Force:";
    document.getElementById("id2").innerHTML = "Magnitude: " + mag;
    document.getElementById("id2").innerHTML += "&nbsp Angle: " + ang;
}
//# sourceMappingURL=app.js.map