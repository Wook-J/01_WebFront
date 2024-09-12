function solution(strArr) {
  let numArr = new Array(30);
  for (let i = 0; i < numArr.length; i++) numArr[i] = 0;

  let arr = strArr.map((e) => e.length);
  for (let i = 1; i <= 30; i++) {
    arr.forEach((ele) => {
      if (ele == i) numArr[i - 1]++;
    })
  }

  let answer = Math.max(...numArr);

  return answer;
}

// 다른 사람 풀이 : Array() 사용
function solution(strArr) {
  let ans = Array(31).fill(0);            // 크기 31짜리 배열 만들고 0으로 초기화
  for (let s of strArr) ans[s.length]++;  // strArr의 요소를 순회하면서 그 길이에 해당하는 요소 1증가

  return Math.max(...ans)
}

// 다른 사람 풀이 2 : Map() 사용
function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);  // 여기 이해못함...
  }
  return Math.max(...counter.values());
}


// Map() 키-값 쌍의 집합
// for of 문 : strArr 배열의 요소(str)을 순서대로 돌면서
// counter.set(키, 값) : 키 값에
// ...counter.values() : counter의 값들을 스프레드 연산자로 펼치기