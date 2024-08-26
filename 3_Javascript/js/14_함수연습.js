// 1번 --------------------------------------------------------------------------------
function prob1(name) {
  return `Hello, [${name}]!`;
}

console.log("1번 :", prob1("WookJae"));

// 2번 --------------------------------------------------------------------------------
function prob2(num1, num2) {
  return num1 + num2;
}

console.log("2번 :", prob2(3, 4));

// 3번 --------------------------------------------------------------------------------
function prob3(otherFn) {
  return otherFn(4, 10);
}

console.log("3번 :", prob3((a, b) => a * b));

// 4번 --------------------------------------------------------------------------------
function prob4(num1, num2) {
  let str;

  if (num1 > num2) { str = "첫 번째 숫자가 더 큽니다."; }
  else { str = "두 번째 숫자가 더 크거나 같습니다."; }

  return str;
}

console.log("4번 :", prob4(4, 20));
console.log("4번 :", prob4(23, 2));

// 5번 --------------------------------------------------------------------------------
function prob5(str) {
  return `문자열의 길이 = ${str.length}`;
}

console.log("5번 :", prob5("입력23하세요"));

// 6번 --------------------------------------------------------------------------------
function prob6(str, repeat) {
  let result6 = "";

  for (let i = 0; i < repeat; i++) {
    result6 += str;
  }

  return result6;
}

console.log("6번 :", prob6("Hello", 3));

// 7번 --------------------------------------------------------------------------------
function prob7(num) {
  let result7;
  if (num % 2 == 0) { result7 = true; }
  else { result7 = false; }
  return result7;
}

console.log("7번 :", prob7(4));
console.log("7번 :", prob7(7));

// 8번 --------------------------------------------------------------------------------
function prob8(num1, num2, num3) {
  let maxNum = num1;
  if (num2 > maxNum) maxNum = num2;
  if (num3 > maxNum) maxNum = num3;
  return maxNum;
}

console.log("8번 :", prob8(2, 34, 500));

// 9번 --------------------------------------------------------------------------------
const prob9 = (arr) => arr[0];

console.log("9번 :", prob9([10, 20, 30, 40, 50]));

// 10번 --------------------------------------------------------------------------------
function prob10(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return { "합계": sum, "평균": sum / (arr.length) };
}

console.log("10번 :", prob10([1, 3, 5, 7, 9]));

// 11번 --------------------------------------------------------------------------------
function prob11(num1, num2, opFn) {
  return opFn(num1, num2);
}

function plus(num1, num2){ return num1 + num2;}
function minus(num1, num2){ return num1 - num2;}
function multi(num1, num2){ return num1 * num2;}
function divi(num1, num2){ return num1 / num2;}

console.log("11번 :", prob11(10, 2, plus));
console.log("11번 :", prob11(10, 2, minus));
console.log("11번 :", prob11(10, 2, multi));
console.log("11번 :", prob11(10, 2, divi));

// 12번 --------------------------------------------------------------------------------

function prob12(name, fn) {
  return fn(name);
}

function sayGoodbye(name){ return "조심히 가세요 "+ name;}
function sayHello(name){ return "안녕하세요 "+ name;}

console.log("12번 :", prob12("WookJae", sayHello));

console.log("git Test 중 학원에 있는 컴퓨터에서 작성!");

console.log("git Test2 집에 있는 컴퓨터라고 치고 작성!");