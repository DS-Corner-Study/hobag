// 변수에 함수 할당하기
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo(); // checkThatTwoPlusTwoEqualsFourAMillionTimes 함수 호출
console.log(isTwoPlusTwo.name); // checkThatTwoPlusTwoEqualsFourAMillionTimes 출력


// 매개변수에 함수 전달하기
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
        return func(val);
    }
    else {
        return 'inconsistent results';
    }
}

console.log(checkConsistentOutput(addTwo, 2));


// Iterators
// .foreach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruits => console.log('I want to eat a ' + fruits));

// .map()
const numbers1 = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers1.map(number => {
  return number * 10;
}); // bigNumbers === [10, 20 ,30, 40, 50]

// .filter()
const words1 = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words1.filter(word => {
  return word.length < 6;
}); // shortWords === ['chair', 'music', 'brick', 'pen', 'door']

// .findIndex()
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
}); // lessThanTen === 3
// 만족하는 요소가 없으면 -1 반환

// .reduce()
const numbers2 = [1, 2, 4, 10];
const summedNums = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}) // summedNums === 17

// .some()
const words2 = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words2.some((word) => {
  return word.length < 6;
})); // true
console.log(words2.every((word) => {
  return word.length < 6;
})); // false