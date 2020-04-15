var p: number[] = [];
var q: number[] = [];

//loop from 1 to 20 to store number and its cube.
for(let i=0;i<20;i++){
    p[i]=(i+1);
    q[i]=Math.pow((i+1),3);
}

//printing heading
document.getElementById("display").innerHTML+="<br><b>Number: Cubes:</b>";

//printing values
for(let i=0;i<20;i++){
    document.getElementById("display").innerHTML+="<br><b>"+p[i]+"&emsp;"+q[i]+"</b>";
}
