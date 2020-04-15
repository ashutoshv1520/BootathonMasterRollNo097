var num = [];
var x;
var temp;
var s;
var p = 0;
//getting number of values to be entered from user
x = parseInt(prompt("Enter the number of elements="));
//getting array elements also checking if values are correct or not
for (let i = 0; i < x; i++) {
    var al = parseInt(prompt("Enter elements of array:"));
    if (isNaN(al)) {
        alert("Invalid Entry!!!");
    }
    else {
        num[i] = x;
    }
}
//printing inpput array
for (let i = 0; i < x; i++) {
    document.getElementById("d1").innerHTML += num[i] + " ";
}
//getting element that is needed to be searched
s = parseInt(prompt("Enter element to be searched="));
//seching element in the array
var flag = 0;
for (let i = 0; i < x; i++) {
    if (num[i] == s) {
        flag = 1;
        p = i;
        break;
    }
}
//flag is 1 if element is present else it stays 0
if (flag == 1) {
    document.getElementById("d3").innerHTML += "Given number found at: " + p;
}
else {
    document.getElementById("d3").innerHTML += "Element not found.";
}
//sorting elemts using bubble sort
for (let i = 0; i < x - 1; i++) {
    for (let j = 0; j < x - 1 - i; j++) {
        if (num[j] > num[j + 1]) {
            temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
}
//printing sorted array
for (let i = 0; i < x; i++) {
    document.getElementById("d2").innerHTML += num[i] + " ";
}
//# sourceMappingURL=app.js.map