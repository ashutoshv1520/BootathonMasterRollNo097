var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement = <HTMLInputElement>document.getElementById("t2");
var t3 : HTMLInputElement = <HTMLInputElement>document.getElementById("t3");
var t4 : HTMLInputElement = <HTMLInputElement>document.getElementById("t4");


function operation()
{
    var s : string = t1.value;
    var a : number = parseInt(t2.value);
    var b : number = parseInt(t3.value);
    var c : string = t4.value;
    //finding substring
    var x : string = s.substring(a,b);
    //searching character
    var y : number = s.search(c);
    //printing answers
    document.getElementById("Display").innerHTML = "<br><b>Answer:<b>";
    document.getElementById("Display").innerHTML += "<br><b>Original String= <b>" + s;
    document.getElementById("Display").innerHTML += "<br><b>Substring= <b>" + x;
    document.getElementById("Display").innerHTML += "<br><b>Position of given character= <b>" + y;
    
}

