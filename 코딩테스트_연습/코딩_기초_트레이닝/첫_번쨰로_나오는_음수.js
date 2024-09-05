function solution(num_list) {
  let answer = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;
      break;
    } else answer = -1;
  }

  return answer;
}

// 다른사람 풀이
const solution = num_list => num_list.findIndex(num => num < 0);
// arr.findIndex((value)=>{return t/f;})
// 0번쨰 요소부터 return 이후 조건식이 처음으로 true인 value의 인덱스반환
// return 이후 조건식이 모두 false이면 -1 반환

// 위의 풀이 풀어쓰기
function solution(num_list) {
    return num_list.findIndex((num) => num < 0);
}