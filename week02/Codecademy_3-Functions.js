// 함수 매개변수의 기본값 설정
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
greeting('Nick') // Hello, Nick!
greeting() // Hello, stranger!


// 함수 표현식 (Function Expressions) : 함수 선언문과 달리 함수 생성 이후에만 호출 가능
const plantNeedsWater1 = function (day) {
    if (day === 'Wednesday') {
      return true;
    } else {
        return false;
    }
}


// 화살표 함수 (Arrow Functions) : 함수 선언문을 간결하게 표현
const plantNeedsWater2 = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
        return false;
    }
}


// 더 간결한 화살표 함수
const plantNeedsWater3 = day =>  day === 'Wednesday' ? true : false;