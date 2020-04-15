//initializing values
var f1:HTMLInputElement=<HTMLInputElement>document.getElementById("m1");
var f2:HTMLInputElement=<HTMLInputElement>document.getElementById("m2");
var an1:HTMLInputElement=<HTMLInputElement>document.getElementById("a1");
var an2:HTMLInputElement=<HTMLInputElement>document.getElementById("a2");

//Error handling:checking if correct values are entered or not
function check(x:number){
    if(isNaN(x)){
        alert("Invalid entry!!!");
    }
}

//fuction to get data from user
function enterval(){
    var m1:number=parseFloat(f1.value);
    var m2:number=parseFloat(f2.value);
    var a1:number=parseFloat(an1.value);
    var a2:number=parseFloat(an2.value);

    check(m1);
    check(m2);
    check(a1);
    check(a2);
    
    //passing values to calc function
    calc(m1,m2,a1,a2);
}

//function to calculate resultant values
function calc(f1:number,f2:number,a1:number,a2:number)
{
    //calculating x component and y component
    var fx:number= f1*Math.cos((Math.PI/180)*a1)+f2*Math.cos((Math.PI/180)*a2);
    var fy:number= f1*Math.sin((Math.PI/180)*a1)+f2*Math.sin((Math.PI/180)*a2);

    //calculating magnitude of resultant
    var r:number=Math.abs(Math.sqrt(((Math.pow(fx,2))+(Math.pow(fy,2)))))
    
    //calculating angle of resultant
    var an:number=(Math.atan2(fy,fx)*180/Math.PI);

    //passing values to printing function
    printfun(r,an);
}

//printing function
function printfun(mag:number,ang:number){
    document.getElementById("id1").innerHTML="Resultant Force:";
    document.getElementById("id2").innerHTML="Magnitude: "+mag;
    document.getElementById("id2").innerHTML+="&nbsp Angle: "+ang;
}

