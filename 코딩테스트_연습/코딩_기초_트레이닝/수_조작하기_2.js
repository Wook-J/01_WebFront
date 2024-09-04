function solution(numLog) {
  let answer = '';

  for (let i = 1; i < numLog.length; i++) {
    switch (numLog[i] - numLog[i - 1]) {
      case 1: answer += 'w'; break;
      case -1: answer += 's'; break;
      case 10: answer += 'd'; break;
      case -10: answer += 'a'; break;
    }
  }

  return answer;
}


function solution(numLog) {           // numLog는 배열형태
  const convert = {                   // JS객체로 대입
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a'
  };

  // slice와 splice의 차이 : slice는 원본 보존, splice는 가져온 일부분에 대해 원본에서 삭제
  return numLog.slice(1).map((v, i) => {    // .slice(i) : i번째 인덱스부터 마지막 인덱스까지 복사한 배열 생성
    return convert[v - numLog[i]]           // .slice(i, j) : i번째 인덱스부터 j번째 인덱스까지 복사한 배열 생성
  }).join('')                               // .map((value, index) =>{return ~~~})
}

/*
numLog.slice(1) -> numLog의 첫번째 요소를 제외한 배열 생성
convert[v-numLog[i]] -> (numLog의 i+1번째 요소) - (numLog의 i번째 요소) 를 convert의 key-value 이용하여 반환
.join('') -> 각 배열의 요소를 문자열로 합침

js객체 변수['key'] -> value로 변환되어 나옴!
*/