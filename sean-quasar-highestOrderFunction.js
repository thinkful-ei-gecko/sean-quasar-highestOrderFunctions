'use strict';

// Drill 1
// Functions as arguments(1)

function fn() {
  console.log('fn call');
}

function repeat(fn, n ) {
  for (let i = 0; i < n; i++){
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

// Drill 2
// Functions as Arugments (2)
// rewriting the array.filter() function

function filter(arr, fn) {
  let newArray = [];

  arr.forEach(element => { if (fn(element) === true) {
    newArray.push(element);
    }
  });

  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

function nameFilter(name) {
  return name[0] === 'R';
}

console.log(filter(myNames, nameFilter));
//console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Functions as return values
// Hazard alert function

function hazardWarningCreator(typeOfWarning) { 
  let warningCounter = 0; 
  return function (location) { 
    warningCounter++; 
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`); 
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`); 
  }; 
}

let rocksWarning = hazardWarningCreator('Rocks on the Road'); 
console.log(rocksWarning); 
let stormWarning = hazardWarningCreator('OMG storm!'); 
console.log(stormWarning); 
let windWarning = hazardWarningCreator('OMG wind!'); 
console.log(windWarning);

rocksWarning('house'); 
stormWarning('town'); 
windWarning('city');

// forEach, filter, and map drill
// turtle step filter & counter drill

function turtle(array) { 

  let posElements = array.filter(element => { 
    if (element[0] >= 0 && element[1] >= 0) {
      console.log(`[${element[0]}, ${element[1]}]`);
      return true;
    }
  });

  const sum = posElements.map(x => x[0] + x[1]);
  console.log(sum);

  let i = 1;
  sum.forEach(x => console.log(`Movement #${i++}: ${x} steps`));

}

const turtleArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]; 
turtle(turtleArray);

// reduce drill

let sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// NO NEED TO SHOUT

function encrypter(sentence) {

  // split sentence into array of words
  let words = sentence.split(' ');
  
  let result = words.reduce( (accumulator, currentValue) =>
  {
    if (currentValue.length === 3) {
      return accumulator + ' ';
    } else {
      return accumulator + currentValue[currentValue.length - 1].toUpperCase();
    }
  }, ''
  );

  console.log(result);
}

encrypter(sentence);