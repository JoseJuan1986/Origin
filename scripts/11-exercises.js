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
/*
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
*/
/*
function addNum(array, num) {
  const myArray5 = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const newValue = value + num;
    myArray5.push(newValue);
  }
 
  return myArray5;
    
}

console.log(addNum([1, 2, 3], 2));
const test3 = [-2, -1, 0, 99];
console.log(addNum(test3, 2));
*/
/*
function addArrays(array1, array2) {
  const myArray6 = [];
  const total = [];
  for (let i = 0; i < array1.length; i++) {
    const value1 = array1[i];
    const value2 = array2[i];
    const newValue = value1 + value2;
    console.log(newValue);
    myArray6.push(newValue);
  }
  return myArray6;
}

const test2 = [1, 2, 3];
const test4 = [4, 5, 6];
console.log(addArrays(test2, test4));
*/
/*
function countPositive(nums) {
  const myArray7 = [];
  const total = [];
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
      
    //console.log(value);
    if (value >= 0) {
      myArray7.push(value);
    }
    
  }

  return myArray7.length;
}

const test5 = [1, 33, 5];

console.log(countPositive(test5));
*/
/*
function minMax(nums) {
  const acumulator = {min: 0, max: 0};
  //console.log(acumulator);
  //console.log(acumulator.max);
  console.log(nums);
  console.log(nums.length);
  console.log(nums[0]);
  
  if (nums[0] === undefined) {
    acumulator.min = null;
    acumulator.max = null;
    return acumulator; 
  }
  
  if (nums.length === 1) {
    acumulator.min = nums[0];
    acumulator.max = nums[0];
    return acumulator;
  }
  
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    
    if (acumulator.min > value) {
      acumulator.min = value;
    }
    if (acumulator.max < value) {
      acumulator.max = value;
    }
    //console.log(acumulator);
    
  }
  return acumulator;
}

myArray = [1, -3 , 5];
console.log(myArray);
const functionEvaluated = minMax(myArray);
console.log(functionEvaluated);
console.log(minMax([-2, 3, -5, 7, 10]));
myArray2 = [];
console.log(myArray2);
console.log(minMax(myArray2));
myArray3 = [3];
console.log(myArray3);
console.log(minMax(myArray3));
*/



/*function countWords(words) {
  let objectCountWords = {fruitName: 'apple', numberOfTimes: 0};
  console.log(objectCountWords);
  let acumulator = 0;
  for (let i = 0; i < words.length; i++) {
    const value = words[i];
    objectCountWords.value  
    if (value === words[i-1] ) {
      acumulator = acumulator + 1; 
      objectCountWords = {fruitName: value, numberOfTimes: acumulator};
    } else {
      
      acumulator = 1;
      objectCountWords = {fruitName: value, numberOfTimes: acumulator};
    }
    //objectCountWords = {fruitName: value, numberOfTimes: acumulator};
    console.log(objectCountWords);
  }
  
  
  return objectCountWords;
}

myArrayOfStrings = ['apple', 'grape', 'apple', 'apple'];
console.log(countWords(myArrayOfStrings));
*/

function Result(apple, grape) {
  this.apple = apple;
  this.grape = grape;
}

function countWords(words) {
  const result = {};
  //const result = new Result();
  console.log(result);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    Object.defineProperty(result, word, {value: '0'})
    console.log(word);
    //You can add new properties to an existing object by simply giving it a value:
    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    //result[word] = 3;
    console.log(result[word]);
    
    console.log(result);
    result[word]++;
    /*
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
    //console.log(result);
    console.log(result[word]);
  */
    }
    
  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));