function solution(num_list, n) {
  return num_list.filter((_,idx)=>idx>=n-1);
}

// slice이용한 방법
function solution(num_list, n) {
  return num_list.slice(n - 1);
}