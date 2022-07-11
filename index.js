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
let check = myMap.has('1');
console.log(check); //true;
