// Part 1: Understanding Basics of Arrays
let fruits = ["apple", "banana", "cherry"];
console.log("index 1", fruits[1]);
console.log("length of inventory",fruits.length);
// Part 2: Adding and Removing Elements
fruits.push("orange")
console.log("updated fruits list", fruits);

let removesFruit = fruits.pop();
console.log("removed fruit", removesFruit);
console.log("New updated fruits list", fruits);

fruits.push("kiwi", "strawberries");
console.log("2 new fruits added", fruits);

fruits.pop();
console.log("Predictinn removal of strawberries",fruits)

// Part 3: Looping Through Arrays

for (let fruit = 0; fruit < fruits.length; fruit++) {
    console.log(fruits[fruit]);
};
for (let fruit = 0; fruit < fruits.length; fruit++){
    console.log(fruits[fruit].toUpperCase());
};

let count = 0;
for (let fruit = 0; fruit < fruits.length; fruit++) {
    if (fruits[fruit] === "apple") { count++}
}
console.log ("count of apples", count);

// Part 4: Hands-On Practice

let cart = [];
cart.push("makeup", "toothpaste", "bodywash");
console.log("Items in cart", cart);
cart.pop();
console.log("Items in cart after removal", cart);
console.log("number of items left", cart.length);

let numbers = [1, 2, 3, 4, 5];
let reversedNum = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNum.push(numbers[i]);
}

console.log(reversedNum); 

// Part 5: Conditionals Statements with Arrays

let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("array1 has a greater length.");
  } else if (array1.length < array2.length) {
    console.log("array2 has a greater length.");
  } else {
    console.log("Both arrays have the same length.");
  };

//   Part 6: Print Even Indexed Elements
const array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  };

//   Part 7: Push Challenge: Nested Loops
let students = ["Khalani", "Prince", "Boots"];
let subjects = ["Math", "Science", "Art"];

for (let i = 0; i < students.length; i++) {
    for ( let sub = 0; sub < subjects.length; sub++) {
        console.log(students[i] , subjects[sub]);
    }
};

//  A nested for loop works by placing another for loop inside of an inital for loop. The first loop
// initiates the execution first, and with the iteration of each item in the first loop, 
// the second loop will execute
