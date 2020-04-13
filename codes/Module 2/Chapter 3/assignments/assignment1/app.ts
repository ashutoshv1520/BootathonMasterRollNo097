function check()
{
    var a: HTMLInputElement = <HTMLInputElement> document.getElementById("t1");
    var data: number = +a.value;

    if(isNaN(data))
    {
        alert("It is not a number. Please enter a numeric value.");
    }
    else{
        if(data%2==0){
            document.getElementById("Display").innerHTML = "<br><b>Given number is EVEN</b>" ;
        }
        else{
            document.getElementById("Display").innerHTML = "<br><b>Given number is ODD</b>" ;
        }
    }

    
}