//initializing variables for matrix a
var n:number=parseInt(prompt("Enter the no. of rows of first martrix:"));
var m:number=parseInt(prompt("Enter the no. of columns of first matrix:"));
var a:number[][]=[];

//getting values for matrix a
a=enterval(n,m);

//caling printing function for matrix a
var x:string="id1";
printfun(n,m,a,x);

//initializing variables for matrix b
var n1:number=parseInt(prompt("Enter the no. of rows of second martrix:"));
var m1:number=parseInt(prompt("Enter the no. of columns of second matrix:"));
var b:number[][]=[];

//getting values for matrix b
b=enterval(n1,m1);

//caling printing function for matrix b
var y:string="id2";
printfun(n1,m1,b,y);

//Error handling:checking if multiplication is possible or not
if(m!=n1)
{
    alert("multiplication not possible!!!")
}
else{
var z:string="id3";
//calling multiplication funtion
    mul(a,b,n,m,n1,m1,z);
}

//function to calculate and print result using values from matrix a and b
function mul(a1:number[][],b:number[][],n:number,m:number,n1:number,m1:number,id:string){
    var sum:number=0;
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<m1;j++)
        {
            for(let k=0;k<n1;k++){
                sum=sum+a[i][k]*b[k][j];
            }
            document.getElementById(id).innerHTML +=sum+" ";
            sum=0;
        }
        document.getElementById(id).innerHTML += "<br>";
    }
}

//function to get values from user
function enterval(n:number,m:number):number[][]{
    var arr:number[][]=[];
    if(isNaN(n)||isNaN(n))
    {
        alert("Enter only valid Numbers")
        location.reload();
    }
    for(let i=0;i<n;i++)
    {
        arr[i]=[]
        for(let j=0;j<m;j++)
        {
            arr[i][j]=parseInt(prompt("enter elment:"));
        }
    }
    return arr;
}

//funtion for printing matrices
function printfun(n:number,m:number,arr:number[][],id:string){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            document.getElementById(id).innerHTML +=arr[i][j]+" ";
        }
        document.getElementById(id).innerHTML += "<br>";
    }

}