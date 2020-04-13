function disp()
{
    var i:number;
    var num:number;
    var r:number;
    var s:number;
    document.getElementById("Display").innerHTML+="Armstrong Numbers from 100 to 999 are:";
    for(i=100;i<1000;i++)
    {
        num=i;
        s=0;
        while(num!=0)
        {
            r=num%10;
            s=s+(r*r*r);
            num=num/10;
            num=parseInt(num.toString());
        }
        if(s==i)
            document.getElementById("Display").innerHTML+="<br>"+i.toString();

    }
}