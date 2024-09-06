function solution(a, d, included) {
  let str = [];
  let answer = 0;
  for (let i = 0; i < included.length; i++) {
    str[i] = a + i * d;
    if (included[i] == true) answer += str[i];
  }
  return answer;
}

// reduce를 사용하는 방법
function solution(a, d, included) {             // 배열이름 included
  return included.reduce((acc, flag, i) => {    // acc : 누산식, flag : 배열의 요소(문제에서 T/F 중 하나), i : 인덱스
    return flag ? acc + a + d * i : acc
  }, 0)                                         // 0 : 누산식(acc)에 초기에 대입될 값! 배열형태로 정의도 가능
}

// map을 사용하는 방법
function solution(a, d, included) {             // 배열이름 included
  var answer = 0;
  included.map((x, i) => {                      // x : 배열의 요소(문제에서 T/F 중 하나), i : 인덱스 번호
    if (x) answer += (a + d * (i));
  })
  return answer;
}