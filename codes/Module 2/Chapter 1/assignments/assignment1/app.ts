var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement = <HTMLInputElement>document.getElementById("t2");
function area()
{
    var c:number = Math.PI*Math.pow(parseFloat(t1.value),2) ;
    t2.value = c.toString();
}

