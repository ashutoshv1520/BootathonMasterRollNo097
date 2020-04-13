var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement = <HTMLInputElement>document.getElementById("t2");

function calc()
{   var x:number = parseFloat(t1.value);
    var c:number = (Math.PI/180)*x;
    var ans:number = x+Math.cos(c)

    t2.value = ans.toString();
}

