var x01 : HTMLInputElement = <HTMLInputElement>document.getElementById("x1");
var y01 : HTMLInputElement = <HTMLInputElement>document.getElementById("y1");
var x02 : HTMLInputElement = <HTMLInputElement>document.getElementById("x2");
var y02 : HTMLInputElement = <HTMLInputElement>document.getElementById("y2");
var x03 : HTMLInputElement = <HTMLInputElement>document.getElementById("x3");
var y03 : HTMLInputElement = <HTMLInputElement>document.getElementById("y3");
var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");



function area()
{
    //variables initialed
    var x1:number = parseFloat(x01.value);
    var y1:number = parseFloat(y01.value);
    var x2:number = parseFloat(x02.value);
    var y2:number = parseFloat(y02.value);
    var x3:number = parseFloat(x03.value);
    var y3:number = parseFloat(y03.value);
    //calculate length sides a,b,c
    var a:number = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    var b:number = Math.sqrt(Math.pow(x1-x3,2)+Math.pow(y1-y3,2));
    var c:number = Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2));
    //calculate semiperimeter s
    var s:number = (a+b+c)/2;
    //calculate area
    var area:number = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    //print area
    t1.value = area.toString();
}

