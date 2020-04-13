var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
function operation() {
    var s = t1.value;
    var a = parseInt(t2.value);
    var b = parseInt(t3.value);
    var c = t4.value;
    //finding substring
    var x = s.substring(a, b);
    //searching character
    var y = s.search(c);
    //printing answers
    document.getElementById("Display").innerHTML += "<br><b>Answer:<b>";
    document.getElementById("Display").innerHTML += "<br><b>Original String= <b>" + s;
    document.getElementById("Display").innerHTML += "<br><b>Substring= <b>" + x;
    document.getElementById("Display").innerHTML += "<br><b>Position of given character= <b>" + y;
}
//# sourceMappingURL=app.js.map