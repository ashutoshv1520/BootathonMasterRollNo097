//Error handling:checking if correct values are entered or not
function check(x) {
    if (isNaN(x)) {
        alert("Invalid entry!!!");
    }
}
//fuction to get data from user
function enterval() {
    var data = [[0, 0], [0, 0]];
    for (let i = 0; i < 2; i++) {
        var x = parseFloat(prompt("Enter magnitude of force " + (i + 1)));
        check(x);
        data[i][0] = x;
        var y = parseFloat(prompt("Enter angle of force " + (i + 1)));
        check(y);
        data[i][1] = y;
    }
    console.log(data);
    calc(data);
}
//function to calculate resultant values
function calc(data) {
    //calculating x and y values
    var fx = data[0][0] * Math.cos((Math.PI / 180) * data[0][1]) + data[1][0] * Math.cos((Math.PI / 180) * data[1][1]);
    var fy = data[0][0] * Math.sin((Math.PI / 180) * data[0][1]) + data[1][0] * Math.sin((Math.PI / 180) * data[1][1]);
    //calculating magnitude of resultant
    var r = Math.abs(Math.sqrt(((Math.pow(fx, 2)) + (Math.pow(fy, 2)))));
    //calculating angle of resultant
    //var an:number=180-(Math.atan(fy/fx)*180/Math.PI);
    var an = (Math.atan2(fy, fx)) * 180 / Math.PI;
    //calling printing function 
    printfun(r, an);
}
function printfun(mag, ang) {
    document.getElementById("id1").innerHTML = "Resultant Force:";
    document.getElementById("id2").innerHTML = "Magnitude: " + mag;
    document.getElementById("id2").innerHTML += "&nbsp Angle: " + ang;
}
//# sourceMappingURL=app.js.map