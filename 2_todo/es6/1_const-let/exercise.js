// 할일 #1 - 아래 example1 함수의 결과 값이 true가 되도록 ES6 변수 선언 방식을 적용해보세요
function example1() {
  let sum = 0;
  let i;

  for (let i = 0; i < 5; i++) {
    sum += i;
  }
  // i는 5
  // i는 not declared

  return i === undefined;
}

// 할일 #2 - 아래 example2 함수의 결과 값이 true가 되도록 로직을 변경해보세요. (두 줄만 제거하면 돌아갑니다)
function example2() {
  let x; // undefined
  {
    const x = 10; // 10
    // x = 30; // error 
  }
  x = 20; // 20
  // let x = 40; // error

  return x === 20;
}

export { example1, example2 };
