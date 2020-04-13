var t1 = document.getElementById("t1");
function operation() {
    var s = t1.value;
    document.getElementById("Display").innerHTML = "<br><b>Answer:<b>";
    document.getElementById("Display").innerHTML += "<br><b>Original String= <b>" + s;
    //convertion to uppercase
    document.getElementById("Display").innerHTML += "<br><b>String in Uppercase= <b>" + s.toUpperCase();
    //convertion to lowercase
    document.getElementById("Display").innerHTML += "<br><b>String in Lowercase= <b>" + s.toLowerCase();
    //spliting elements at spaces
    let ar = s.split(" ");
    document.getElementById("Display").innerHTML += "<br><b>Elements after splitting= <b>" + ar;
}
//# sourceMappingURL=app.js.map