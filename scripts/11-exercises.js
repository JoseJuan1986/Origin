/*
const nums = [10, 20, 30, 40];
//console.log(nums);
nums[2] = 99;
console.log(nums);
const array = [];
function getLastValue(array) {
  //console.log(array.length); 
  //let test;
  //for (let i = 0; i < array.length; i++) {
   // test = array[i];
    //console.log(test);
    
 // }
  //array.push(test);
  
return array[array.length-1];
}

console.log(getLastValue(nums));
/*
nums.push('Hola');
console.log(nums);
const lastValue = getLastValue(nums);
console.log(lastValue);
nums.push({mujer: 'Maria Belen', hija1: 'Diana', hija2: 'Belen'});
console.log(nums);
nums.splice(3,2);
console.log(nums);
array2 = ['hi', 'hello', 'good'];
console.log(getLastValue(array2));
*/
/*
function arraySwap2 (array) {
  const firstE = array[0];
  const lastE = array[array.length - 1];
  array[0] = lastE;
  array[array.length - 1] = firstE;
  return array;
}
console.log(arraySwap2(nums));

function arraySwap(array) {
  const swapArray = [];
  for (let i = 0; i < array.length; i++){
    const value = array[i];
    swapArray.push(value);
  }
  const firstE = swapArray[0];
  const lastE = swapArray[swapArray.length -1];
  swapArray[0] = lastE;
  swapArray[swapArray.length-1] = firstE;
  return swapArray;
}
console.log(nums);
const displayValue = arraySwap(nums);
console.log(displayValue);

const stringArray = ['hi', 'hello', 'good'];
console.log(arraySwap(stringArray));
console.log(stringArray);
console.log(arraySwap2(stringArray));
*/
/*
for (let i = 0; i <11; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i = i - 1) {
  console.log(i);
}
  */
/*
let i = 0;
while (i < 11){
  console.log(i);
  i++;
}

let j = 5;
while (j >=0) {
  console.log(j);
  j--;
}
*/
myArray = [2, 4, 6, 8];
myArray2 = [];
for (let i = 0; i < myArray.length; i++) {
  //console.log(i);
  const value = myArray[i];
  const newValue = value + 1;
  console.log(newValue);
  myArray2.push(newValue);
  //console.log(myArray);
}
console.log(myArray2);


function addOne(array) {
  const myArray3 = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const newValue = value + 1;
    myArray3.push(newValue);
  }
  return myArray3;
}

console.log(addOne(myArray));
const myArray4 = [-2, -1, 0, 99];
console.log(addOne(myArray4));