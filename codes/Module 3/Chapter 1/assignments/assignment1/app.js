var p = [];
var q = [];
for (let i = 0; i < 20; i++) {
    p[i] = (i + 1);
    q[i] = Math.pow((i + 1), 3);
}
document.getElementById("display").innerHTML += "<br><b>Number: Cubes:</b>";
for (let i = 0; i < 20; i++) {
    document.getElementById("display").innerHTML += "<br><b>" + p[i] + "&emsp;" + q[i] + "</b>";
}
//# sourceMappingURL=app.js.map