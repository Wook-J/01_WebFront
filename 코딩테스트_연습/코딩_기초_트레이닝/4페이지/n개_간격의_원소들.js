function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) answer.push(num_list[i]);

  return answer;
}

// 다른사람 풀이
const solution = (num_list, n) => num_list.filter((_, i) => (i % n==0))