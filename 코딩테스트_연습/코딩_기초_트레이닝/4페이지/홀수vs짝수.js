function solution(num_list) {
  let answer = num_list.reduce((acc, cur, idx) => {
    if (idx % 2 == 0) acc[0] += cur;      // 홀수번째원소 (idx는 짝수)
    else acc[1] += cur;

    return acc;
  }, [0, 0]);
  return answer[0] > answer[1] ? answer[0] : answer[1];
}

// 다른사람 풀이 : map 사용
function solution(num_list) {
  let odd = 0;
  let even = 0

  num_list.map((v, idx) => !(idx % 2) ? even += v : odd += v)

  return odd > even ? odd : even;
}

// 다른사람 풀이 : forEach 사용
function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.forEach((x, i) => i % 2 == 0 ? even += x : odd += x);

  return Math.max(odd, even);
}