function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const result = arr.slice(s, e + 1).filter(num => num > k);
    return result.length > 0 ? Math.min(...result) : -1;
  });
}


// 다른 풀이
function solution(arr, queries) {
  var answer = [];
  for (let [s, e, k] of queries) {
    let temp = arr.filter((v, i) => (i >= s && i <= e && v > k)).sort((a, b) => a - b)[0]
    answer.push(temp ? temp : -1)
  }

  return answer;
}