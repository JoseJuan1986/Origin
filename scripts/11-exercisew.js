
const array1 = ['Belen', 'Diana', 'Maria Belen', 'Jose Juan', 'search', 'Maite', 'search'];
const array = [];
const array2 = [];
const array3 = [];
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    if ( arrayElement === word) {
      //array2.push(arrayElement);
      //Check if arrayElement is already in the array2 ifso return i++ instead of i
      /*
      for (let j = 0; j < array2.length; j++) {
        arrayElement2 = array2[j];
        if (arrayElement2 === arrayElement) {
          array2.push(arrayElement);
          i++;
          console.log(i);
        }
      }
      */
      //console.log(array);
      //console.log(word);
      //console.log(i);
      return i;
    } else {
      array3.push(arrayElement);  
    }
  }
  if (array.length === array3.length) {
    console.log(-1);
    return -1;
  }
}
//findIndex(array1, 'Pepe');
//console.log(array3);

uniqueArray = [];
//console.log(uniqueArray);

function unique(array) {
  uniqueArray = [];
  //console.log('Hi');
  for (let i = 0; i < array.length; i++) {
    //console.log('inside the loop');
    const arrayElement = array[i];
    const arrayElementToString = arrayElement.arrayElementToString;
    //console.log(array);
    //console.log(arrayElement);
    //console.log(findIndex(array, arrayElement));
    if (findIndex(array, arrayElement) === i){
      uniqueArray.push(arrayElement);
    } else {
      //console.log('am I here')
      continue;
    }
    
  }
  return uniqueArray;
}
console.log(array1);
console.log(unique(array1));
console.log(array4 = ['yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'Tu']);
console.log(unique(array4));