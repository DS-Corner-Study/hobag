// '===' 같은지 비교
let mood = 'sleepy';
if (mood === 'sleepy') {
  console.log('time to sleep');
}


// falsy value : 0, "", '', null, undefined, NaN


// tool이 true이면 writingUtensil = tool;
// tool이 false이면 writingUtensil = 'pen';
let tool = 'marker';
let writingUtensil = tool || 'pen';  


// 삼항 연산자
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');


// switch문
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
   console.log('No medal awarded.');
   break;
}