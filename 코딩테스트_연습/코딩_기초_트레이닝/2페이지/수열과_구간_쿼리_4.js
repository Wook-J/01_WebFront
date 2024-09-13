function solution(arr, queries) {
  let answer = [];

  arr.forEach((ele, idx) => {
    queries.forEach(([s, e, k]) => {
      if (idx >= s && idx <= e && idx % k == 0) ele++;
    });
    answer.push(ele);
  });

  return answer;
}

// 다른사람 풀이 : for of 문 활용
function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}

// 다른사람 풀이 : reduce 활용
function solution(arr, queries) {
  return queries.reduce((acc, [s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k == 0) acc[i]++;
    }
    return acc;
  }, [...arr]);
}