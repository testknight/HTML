var myObject, myArray;
function myFunction(a, b) {
    return a + b;
}
myArray = [10, 2]
myObject = myFunction.apply(myObject, myArray);      // Will return 12 
console.log(myObject); 