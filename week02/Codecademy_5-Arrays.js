// 배열의 수정
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments); // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo'];
console.log(condiments); // [ 'Mayo' ]
utensils[3] = 'Spoon';
console.log(utensils); // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]


// 배열의 프로퍼티
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // 3


// 배열의 메서드
// .push()
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); // ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// .pop()
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); // [ 'item 0', 'item 1' ]
console.log(removed); // item 2

// .shift()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
/*
[ 'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
*/

// .unshift()
groceryList.unshift('popcorn');
console.log(groceryList);
/*
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
*/

// .slice()
console.log(groceryList.slice(1, 4)); // [ 'bananas', 'coffee beans', 'brown rice' ]

// .indexOf()
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex); // 4


// 함수의 인수로 전달된 배열 (Call by Reference)
const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // ['peony', 'daffodil', 'marigold', 'lily']


// 다차원 배열
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // [2, 3]
console.log(nestedArr[1][0]); // 2