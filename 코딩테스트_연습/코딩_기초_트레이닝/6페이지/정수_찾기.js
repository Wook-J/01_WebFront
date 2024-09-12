function solution(num_list, n) {
  let answer = 0;
  num_list.forEach((ele) => {
    if (ele == n) answer = 1;
  })
  return answer;
}

// 다른사람 풀이 : includes() 활용
function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}