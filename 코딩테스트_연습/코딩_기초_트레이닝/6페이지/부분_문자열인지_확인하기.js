function solution(my_string, target) {
  return my_string.indexOf(target) == -1 ? 0 : 1;
}

// 다른사람 풀이 : includes
function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}