// 지역 변수
const logSkyColor1 = () => {
    let color = 'blue'; 
    console.log(color); // blue 
}
logSkyColor1(); // blue
console.log(color); // ReferenceError



// 전역 변수
let color = 'blue';
const returnSkyColor = () => {
  return color; // blue 
};
console.log(returnSkyColor()); // blue


// 지역 변수와 블록 변수
const logSkyColor2 = () => {
    const dusk = true;
    let color = 'blue'; // 지역 변수
    if (dusk) {
      let color = 'pink'; // 블록 변수
      console.log(color); // pink
    }
    console.log(color); // blue
};
  
console.log(color); // ReferenceError
  