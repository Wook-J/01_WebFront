// 매개변수, 전달인자 -------------------------------------------------------
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달받아 출력하는 함수 -----------------------------------------
function print1(num, str) {               // 함수 선언
  console.log(`${num} 은/는 ${str} 입니다.`);
}

// #btn1 클릭 시 #input1의 값을 읽어와 print1() 함수를 호출
btn1.addEventListener("click", function () {
  const value = input1.value;

  if (value.length == 0) {
    console.log("값을 입력해주세요");
    return;                               // 함수의 종료 + 호출한 곳으로 돌아감
  }

  let result;                             // 결과를 저정할 변수 선언

  if (Number(value) == 0) result = "0";
  else if (Number(value) > 0) result = "양수";
  else result = "음수"

  // 함수 호출 + 값 전달,    (*) 전달되는 값의 순서 아주 중요!!!!!!!!!!
  // ctrl + 호출된 함수 부분 클릭 : 선언된 함수 부분으로 이동!

  print1(value, result);                  // value 은/는 result 입니다.
  // print1(result, value);                  // result 은/는 value 입니다.
});
//-------------------------------------------------------------------------------------------
// 매개변수로 배열 전달하기 --------------------------------------------------

function arrayTest(arr) {
  // 전달 받은 배열의 모든 요소 출력하기
  for (let i = 0; i < arr.length; i++) {

    // arr[i]에 있는 값이 "멜론"과 일치하면 해달 요소의 값을 딸기로 재대입해라
    if (arr[i] == "멜론") arr[i] = "딸기";

    console.log(`${i} 번 인덱스 값 :`, arr[i]);
  }
}

// #btn2a 클릭되었을 때 arrayTest() 함수 호출
document.querySelector("#btn2a").addEventListener("click", function () {
  const arr1 = [10, 20, 30];
  const arr2 = ["사과", "바나나", "멜론"];

  arrayTest(arr1);
  arrayTest(arr2);

  console.log("arr2[2] :", arr2[2]);
  // 왜 멜론이 아니라 딸기가 출력될까?
  // -> arrayTest(arr2) 호출 시 arr2 배열을 통쨰로 복사해서 전달하는게 아니라
  //    arr2에 저장된 주소만 보내서 함수를 수행

  // arrayTest() 함수에 arr2와 같은 배열을 참조해서 수정
  // -> 함수 수행 후 돌아와서도 참조하고 있던 배열의 2번 index 값이 변화되어 있음

  // 배열, 객체 -> 값을 여러개 가지고 있는 자료형
  // 배열명 자체에는 배열의 index들을 모아놓은 주소명이 기재되어있음(참조한다고 함)

  /* 참조란?
    객체 지향 언어에서 배열, 객체 등은 값을 여러개 가지고 있는 자료형인데,
    변수는 값을 1개만 저장할 수 있기 때문에

    object들을 메모리의 다른 곳에 저장하고, 저장된 곳의 주소를 변수에 저장해서

    필요할 때마다 해당 주소를 찾아가 원하는 값을 얻어오거나 수정할 수 있게 하는것

    즉, 주소를 찾아가는 것을 [참조]라고 함!!
  */
});

// 매개변수로 요소 전달 -------------------------------------------------------
function btn2bFn(el) {
  // 매개변수 el (element) : 이벤트가 발생한 요소
  // 여기서는 버튼태그 자체가 들어옴
  el.style.backgroundColor = "yellow";
}

// 매개변수로 함수 전달 -------------------------------------------------------

function print2(fn) {
  // console.log(fn);  함수의 내용 자체가 나옴
  console.log(`a + b = ${fn(3, 4)}`);
}

document.querySelector("#btn2c").addEventListener("click", function () {

  // 함수도 변수에 저장 가능! 변수명 == 함수명
  const sumFn = function (a, b) {
    return a + b;             // 함수를 종료하고, (a+b)를 가지고 호출한 곳으로 돌아감
  }

  // 전달인자로 함수를 전달, 함수명만 전달하면 됨
  print2(sumFn);
});
//--------------------------------------------------------------------------------------------
// return 확인하기 -----------------------------------------------------------
function returnTest(num1, num2) {
  // console.log(typeof num1);
  return num1 * num2;                 // 전달받은 2개의 값을 곱해서 return(반환)
}

function sumFn(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

document.querySelector("#btn3a").addEventListener("click", function () {
  const numbers = [];

  // 배열.push(값) : 배열의 마지막 요소로 값을 추가
  numbers.push(30);
  numbers.push(50);
  numbers.push(4);
  numbers.push(returnTest(2, 5));           // 함수를 호출해서 되돌려받은 값(return 값;)을 push하기

  console.log(numbers);

  console.log("합계 :", sumFn(numbers))
});
//--------------------------------------------------------------------------------------------
// 화살표 함수 ----------------------------------------------------------------
const arrowList = document.querySelectorAll(".arrow");

// 화살표 함수 기본 형태 -------------------------------------------------------
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 연습");
});

// 매개변수가 1개인 경우 : () 생략 가능
arrowList[1].addEventListener("click", e => {
  // console.log(e);                            // e의 특성 : PointerEvent설명(JS객체)
  e.target.style.backgroundColor = "pink"    // e 자체에 주면 안되고 e.target에 style을 줘야함!!
});

// return 한 줄만 작성된 경우 -------------------------------------------------
function twoNumberPlus(otherFn) {
  // 여기의 otherFn : (a, b) => a + b

  const input1 = Number(prompt("첫 번째 값"));
  const input2 = Number(prompt("두 번째 값"));

  alert(`${input1} + ${input2} = ${otherFn(input1, input2)}`);     // a(<= input1) + b(<= input2) 반환
}

arrowList[2].addEventListener("click", () => {
  twoNumberPlus((a, b) => a + b);                // return 1줄만 있는 경우 {}, return 생략 가능
});                                              // (a, b) => a + b   : 화살표 함수에서 return 생략한 형태


// return 한 줄인데 object 반환하는 경우 (return을 생략할 수 없음!) --------------
function printObject(otherFn) {
  // 여기의 otherFn : (name, age) => {return { "name": name, "age": age }; }

  console.log(otherFn("홍길동", 20));   // -> {"name": 홍길동, "age": 20}
}

arrowList[3].addEventListener("click", () => {
  printObject((name, age) => {                   // return 생략하면 오류뜸!
    return { "name": name, "age": age };         // JS 객체 {K:V, K:V, ...}
  });
});
//----------------------------------------------------------------------------------------------
// 즉시 실행 함수                          // 앞쪽 푸른색 소괄호 선언+정의  
(() => { 
  console.log("즉시 실행 함수입니다.");
})()                                      // 뒤쪽 푸른색 소괄호 호출
