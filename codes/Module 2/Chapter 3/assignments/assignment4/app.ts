var x01 : HTMLInputElement = <HTMLInputElement>document.getElementById("x1");
var y01 : HTMLInputElement = <HTMLInputElement>document.getElementById("y1");
var x02 : HTMLInputElement = <HTMLInputElement>document.getElementById("x2");
var y02 : HTMLInputElement = <HTMLInputElement>document.getElementById("y2");
var x03 : HTMLInputElement = <HTMLInputElement>document.getElementById("x3");
var y03 : HTMLInputElement = <HTMLInputElement>document.getElementById("y3");
var x04 : HTMLInputElement = <HTMLInputElement>document.getElementById("x");
var y04 : HTMLInputElement = <HTMLInputElement>document.getElementById("y");

function check()
{
    //variables initialed
    var x1:number = parseFloat(x01.value);
    var y1:number = parseFloat(y01.value);
    var x2:number = parseFloat(x02.value);
    var y2:number = parseFloat(y02.value);
    var x3:number = parseFloat(x03.value);
    var y3:number = parseFloat(y03.value);
    var x:number = parseFloat(x04.value);
    var y:number = parseFloat(y04.value);

    //calculate areas
    var abc:number = Math.abs((x1*(y2-y1)+x2*(y3-y1)+x3*(y1-y2))/2);
    var pab:number = Math.abs((x*(y2-y3)+x2*(y3-y)+x3*(y-y2))/2);
    var pbc:number = Math.abs((x1*(y-y3)+x*(y3-y1)+x3*(y1-y))/2);
    var pac:number = Math.abs((x1*(y2-y)+x2*(y-y1)+x*(y1-y2))/2);

    //calculate sum
    var s:number = pab + pbc + pac;
 
    if(Math.abs(abc-s)<0.00001){
        
        document.getElementById("display").innerHTML = "<br><b>Point is inside triangle.</b>";

    }
    else{
        document.getElementById("display").innerHTML = "<br><b>Point is not inside triangle.</b>";
    }
}

