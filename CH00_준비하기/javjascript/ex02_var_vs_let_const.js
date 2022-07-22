const PI = Math.PI

console.log(`반지름이 10인 원의 넓이는 ${10 ** 2 * PI} 입니다.`);

let score;
score = 100;
score = 200;

var some = 104;
some = 1004;

/**
 * 호이스팅(Hoisting)
 */

hello();

function hello() {
  console.log("asdf");
}

let level = 10;

function levelUp() {
  level++;
}

levelUp();

console.log("current level -> ", level);

/**
 * 변수 범위(Scope): 프로그램 내에서 변수의 접근 수준
 * var : 함수형 변수(function-scope)
 * let : 영역형 변수(block-scope);
 */