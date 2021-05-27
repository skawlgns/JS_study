'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['banana','apple'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //banana
console.log(fruits[1]); //apple;
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]); //apple

//3. Looping over an array
//print all fruits

// . for
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addtion, deletion, copy

//push: add an item to the end
fruits.push('grape','peach');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('lemon','plum');
console.log(fruits);

//shift: remove an item to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);
//note!! shift, unshift are slower than pop, push

//splice: romove an item by index position
fruits.push('grape','peach','lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'mango','melon');
console.log(fruits);

//combine two arrays
const fruits2 = ['pear', 'cherry'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//indexOf: find the index
console.clear();

console.log(fruits);
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('lemon'));

//includes
console.log(fruits.includes('melon'));
console.log(fruits.includes('watermelon'));

//lastIndexOf
console.clear();

fruits.push('mango');
console.log(fruits);
console.log(fruits.indexOf('mango'));
console.log(fruits.lastIndexOf('mango'));
