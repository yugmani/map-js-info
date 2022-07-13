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

//Chaining
// ***************************

const map1 = new Map();
map1.set('John', 'name').set(23, 'Id').set(true, 'isGraduated');

console.log(map1.size); //3
console.log(map1.get(23)); //Id
console.log(map1.get('id')); //undefined

//Iteration Over Map
// ********************************
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

//iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
  //cucumber, tomatoes, onion
}

//iterate over values (amount)
for (let amount of recipeMap.values()) {
  console.log(amount);
  //500, 350, 50
}

//iterate over [key, value] entries
for (let entry of recipeMap) {
  console.log(entry);
  // ["cucumber", 500]
  // ["tomatoes", 350]
  // ["onion", 50]
}

// Using built-in forEach method of Map, similar to Array
//runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
  //cucumber: 500
  // tomatoes: 350
  // onion: 50
});

//Object.entries: Map from Object
// **************************************

//We can create a map from an object like this:
let obj = {
  name:"John",
  age:30
};

let map = new Map(Object.entries(obj));

console.log(map.get('name')); //John
console.log(map.get("age")); //30

map.set("grade", "six");
console.log(map.get("grade")); //six;

console.log(map.size); //3

