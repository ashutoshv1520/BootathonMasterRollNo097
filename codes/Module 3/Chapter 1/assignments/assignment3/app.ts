//initializing variables
let list1:HTMLSelectElement = <HTMLSelectElement>document.getElementById("fruitlist");
let fruit:{value:number,name:string,type:string,price:number}[] = [];

//entering values or selector menu
fruit.push({ value: 0, name: "Mango", type:"regular",price:100});
fruit.push({ value: 1, name: "Banana", type: "regular",price:100});
fruit.push({ value: 2, name: "Mango", type: "high",price:500});
fruit.push({ value: 3, name: "Banana", type: "high",price:200});
fruit.push({ value: 4, name: "Apple", type: "regular",price:500});
fruit.push({ value: 5, name: "Apple", type: "high",price:300});
fruit.push({ value: 6, name: "Orange", type: "regular",price:500});
fruit.push({ value: 7, name: "Orange", type: "high",price:400});
fruit.push({ value: 8, name: "Grape", type: "regular",price:60});
fruit.push({ value: 9, name: "Grape", type: "high",price:100});
fruit.push({ value: 10, name: "Cherry", type: "regular",price:500});

//creating options
for(let i=0;i<=10;i++)
{
    let option:HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
    option.text = fruit[i].name + "--" + fruit[i].type;
    option.value = fruit[i].value.toString();
    list1.add(option);
}

//finding price and printing result
function price()
{
    let qty1:HTMLInputElement = <HTMLInputElement>document.getElementById("qty");
    let selectedoption:HTMLInputElement = <HTMLInputElement>document.getElementById("fruitlist");
    for(let i=0;i<fruit.length;i++){
        if(fruit[i].value.toString()==selectedoption.value){
            var price= fruit[i].price;
            var name= fruit[i].name + "--" + fruit[i].type;
            break;
        }
    }
    let z:HTMLInputElement = <HTMLInputElement>document.getElementById("cart");
    z.innerHTML= z.innerHTML+name+"="+price*parseInt(qty1.value)+"<br>";
}