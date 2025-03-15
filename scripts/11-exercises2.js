/*const array1 = ['Belen', 'Diana', 'Maria Belen', 'Jose Juan', 'search', 'Maite', 'search'];

//console.log(array1);
const array2 = [];
//console.log(array2);

for (let i = 0; i < array1.length; i++) {
  
  const array1Element = array1[i];
  
  //console.log(array2); 
  if ( array1Element === 'search') {
    
    console.log(i);
    break;
  } else {
    array2.push(array1Element);  
  }
}
if (array1.length === array2.length) {
  console.log(-1);
}

const array = [];
const array3 = [];
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    if ( arrayElement === word) {
    
      console.log(i);
      break;
    } else {
      array3.push(arrayElement);  
    }
  }
  if (array.length === array3.length) {
    console.log(-1);
  }
}
findIndex(array1, 'Maite');
*/
/*
function removeEgg (foods) {
  let foodArray = [];

  foodArray = foods.slice(0,5);
  foodArray.reverse(foods);
  
  const foodArrayResult = [];
  const acumulator = [];
  for (let i = 0; i < foodArray.length; i++) {
    const foodArrayElement = foodArray[i];
    console.log(foodArrayElement);
    if (foodArrayElement === 'egg') {
      //const acumulator = [];
      
        if (acumulator.length < 2) {
          //console.log(acumulator.length);
          acumulator.push(foodArrayElement);
          //console.log(acumulator);
          //continue;
        } else {
          foodArrayResult.push(foodArrayElement);
        }
      //continue;
    } else {
      foodArrayResult.push(foodArrayElement);
    }

  }

  
 //console.log(foodArrayResult); 
 return foodArrayResult.reverse();
  
}

const foodArraytest = ['egg', 'apple', 'egg', 'egg', 'ham'];

 console.log(removeEgg (foodArraytest));
 console.log(foodArraytest);
 
 */

 for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0 ) {
    console.log('Buzz');
  } else if (i % 3 === 0 ) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
  

 }