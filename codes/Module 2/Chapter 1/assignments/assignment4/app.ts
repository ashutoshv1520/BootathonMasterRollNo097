var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement = <HTMLInputElement>document.getElementById("t2");
var t3 : HTMLInputElement = <HTMLInputElement>document.getElementById("t3");

function add()
{
    var c:number = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}

function sub()
{
    var c:number = parseInt(t1.value) - parseInt(t2.value);
    t3.value = c.toString();
}

function mul()
{
    var c:number = parseFloat(t1.value) * parseFloat(t2.value);
    t3.value = c.toString();
}

function div()
{
    var c:number = parseFloat(t1.value) / parseFloat(t2.value);
    t3.value = c.toString();
}

function sin(){
    var x:number = parseFloat(t1.value);
    var y:number = (Math.PI/180)*x;
    var c:number = Math.sin(y);
    t3.value = c.toString();
}

function cos(){
    var x:number = parseFloat(t1.value);
    var y:number = (Math.PI/180)*x;
    var c:number = Math.cos(y);
    t3.value = c.toString();
}

function tan(){
    var x:number = parseFloat(t1.value);
    var y:number = (Math.PI/180)*x;
    var c:number = Math.tan(y);
    t3.value = c.toString();
}

function sqroot(){
    var c:number = Math.sqrt(parseInt(t1.value));
    t3.value = c.toString();
}

function power(){
    var c:number = Math.pow(parseInt(t1.value),parseInt(t2.value));
    t3.value = c.toString();
}
