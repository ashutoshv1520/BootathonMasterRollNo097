function find()
{   
    var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
    var n : number = parseInt(t1.value);
    var c1 : number = 0;
    var c2 : number = 0;
    var c3 : number = 0;
    var s1 : number = 0;
    var s2 : number = 0;
    var s3 : number = 0;
    
    var i : number;
    for(i=0;i<n;i++){
        var x:number = parseInt(prompt("Enter number = "));
        console.log(x);
        if(x>0){
            c1=c1+1;
            s1=s1+x;    
        }
        else if(x<0){
            c2=c2+1;
            s2=s2+x;
        }
        else if(x==0){
            c3=c3+1;
            s3=s3+x;
        }
    }

    document.getElementById("display").innerHTML="<b>Answer:</b>";
    document.getElementById("display").innerHTML+="<br><b>Number of positive elements:</b>"+c1;
    document.getElementById("display").innerHTML+="<br><b>Sum of positive elements:</b>"+s1;
    document.getElementById("display").innerHTML+="<br><b>Number of negative elements:</b>"+c2;
    document.getElementById("display").innerHTML+="<br><b>Sum of negative elements:</b>"+s2;
    document.getElementById("display").innerHTML+="<br><b>Number of zeroes:</b>"+c3;
    
}

