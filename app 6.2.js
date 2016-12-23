function maxNum(num1, num2, num3){
    var tmp = 0;
    if(num1 < num2 && num3 < num2) {
        tmp = num2;
    } else if(num3 < num1){
        tmp = num1;
    } else {
        tmp = num3;    
    }
    return tmp;
}
var arr = [];
for(var i = 0; i < 3; i++) {
    arr[i] = prompt("Enter a number");
}
console.log(maxNum.apply(this, arr));
