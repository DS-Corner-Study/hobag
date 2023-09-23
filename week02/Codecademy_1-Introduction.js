console.log('Hello' + ' ' + 'World'); // Hello World


// 문자열 프로퍼티
console.log('Teaching the world how to code'.length); // 30


// 문자열 메서드
console.log('Hey'.startsWith('H')); // true
console.log('Codecademy'.toUpperCase()); // CODECADEMY
console.log('    Remove whitespace   '.trim()); // Remove whitespace


// 난수 발생
console.log(Math.random()); // 0 <= x < 1 랜덤 실수 x 출력
console.log(Math.random() * 50); // 0 <= x < 50 랜덤 실수 x 출력
console.log(Math.floor(Math.random() * 50)); // 0 <= x < 50 랜덤 정수 x 출력
console.log(Number.isInteger(2017)); // true