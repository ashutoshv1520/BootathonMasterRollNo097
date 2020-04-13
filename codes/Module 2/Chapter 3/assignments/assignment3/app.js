function check() {
    var t1 = document.getElementById("t1");
    var s = t1.value;
    console.log(s.lastIndexOf("-"));
    if (s.lastIndexOf("+") > -1) {
        var a = s.split("+");
        document.getElementById("display").innerHTML = "Real Part = " + a[0] + " and Complex Part=" + a[1];
        var b = parseInt(a[0]);
        if (b >= 0) {
            document.getElementById("display").innerHTML += "<br>Real Part is Positive";
        }
        else {
            document.getElementById("display").innerHTML += "<br>Real Part is Negative";
        }
        document.getElementById("display").innerHTML += "<br>Complex Part is Positive";
    }
    else if (s.lastIndexOf("-") > -1) {
        var a = s.split("-");
        console.log(a, "test");
        document.getElementById("display").innerHTML = "Real Part = " + a[0] + " and Complex Part=" + a[1];
        var b = parseInt(a[0]);
        if (b >= 0) {
            document.getElementById("display").innerHTML += "<br>Real Part is Positive";
        }
        else {
            document.getElementById("display").innerHTML += "<br>Real Part is Negative";
        }
        document.getElementById("display").innerHTML += "<br>Complex Part is Negative";
    }
}
//# sourceMappingURL=app.js.map