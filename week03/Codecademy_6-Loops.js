const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// 문장 실행 후 조건식 검사
do {
 console.log(firstMessage)
} while (true === false);

// 조건식 검사 후 문장 실행
while (true === false){
  console.log(secondMessage)
};