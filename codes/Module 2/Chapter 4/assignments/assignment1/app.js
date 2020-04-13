function find() {
    var t1 = document.getElementById("t1");
    var n = parseInt(t1.value);
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var i;
    for (i = 0; i < n; i++) {
        var x = parseInt(prompt("Enter number = "));
        console.log(x);
        if (x > 0) {
            c1 = c1 + 1;
            s1 = s1 + x;
        }
        else if (x < 0) {
            c2 = c2 + 1;
            s2 = s2 + x;
        }
        else if (x == 0) {
            c3 = c3 + 1;
            s3 = s3 + x;
        }
    }
    document.getElementById("display").innerHTML = "<b>Answer:</b>";
    document.getElementById("display").innerHTML += "<br><b>Number of positive elements:</b>" + c1;
    document.getElementById("display").innerHTML += "<br><b>Sum of positive elements:</b>" + s1;
    document.getElementById("display").innerHTML += "<br><b>Number of negative elements:</b>" + c2;
    document.getElementById("display").innerHTML += "<br><b>Sum of negative elements:</b>" + s2;
    document.getElementById("display").innerHTML += "<br><b>Number of zeroes:</b>" + c3;
}
//# sourceMappingURL=app.js.map