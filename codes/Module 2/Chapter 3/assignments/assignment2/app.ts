function check()
{
    var a: HTMLInputElement = <HTMLInputElement> document.getElementById("t1");
    var b: HTMLInputElement = <HTMLInputElement> document.getElementById("t2");
    var c: HTMLInputElement = <HTMLInputElement> document.getElementById("t3");
    
    var x: number = parseFloat(a.value);
    var y: number = parseFloat(b.value);
    var z: number = parseFloat(c.value);

    var ans1: string;
    var ans2: string;

    if(isNaN(x)||isNaN(y)||isNaN(z))
    {
        alert("It is not a number. Please enter a numeric value.");
    }
    else{
        if((Math.pow(x,2)+Math.pow(y,2))==Math.pow(z,2)||(Math.pow(z,2)+Math.pow(y,2))==Math.pow(x,2)||(Math.pow(x,2)+Math.pow(z,2))==Math.pow(y,2)){
            ans1=" and Right angle triangle.";
        }
        else{
            ans1=" but not Right angle triangle.";
        }
        if(x==y && y==z && z==x){
            ans2="Equilateral Triangle";

        }
        else if((x==y && y!=z)||(x==z && y!=x)||(z==y && x!=z)){
            ans2="Isosceles Triangle";
        }
        else if(x!=y && y!=z && z!=x)
        {
            ans2="Scalene Triangle";
        }
        else{
            ans2="Invalid entry";
        }

        document.getElementById("Display").innerHTML = "<br><b>Given Triangle is </b>" + ans2 + ans1 ;

    }

    
}