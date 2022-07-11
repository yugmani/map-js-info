// Import stylesheets
import './style.css';

// Creating a new map
let myMap = new Map();

// Storing a value by the key;
myMap.set('1', 'my string 1'); // a string key
myMap.set(2, 'my number 2'); // a numeric key
myMap.set(true, 'isCompleted'); // a boolean key

//Getting the value by the key,
const key1 = myMap.get('1');
console.log(key1); //my string 1
const key2 = myMap.get(2);
console.log(key2); //my number 2

//checking if a key exists in the given map.
let check1 = myMap.has('1');
console.log(check1); //true;

let check3 = myMap.has(true);
console.log(check3); //false

let check7 = myMap.has(7);
console.log(check7); //false

//Getting the size of map
let size1 = myMap.size;
console.log(size1); //3

//Removing the value of a map by the key
let outed1 = myMap.delete(true);
console.log(outed1); //true; ->true is deleted.
console.log(myMap.size); //2;

//Removing everything from the map.
myMap.clear();
console.log(myMap.size); //0;
