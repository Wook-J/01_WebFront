function solution(arr, queries) {
  queries.forEach((query) => {
    let temp = arr[query[0]];
    arr[query[0]] = arr[query[1]];
    arr[query[1]] = temp;
  });

  return arr;
}

// 구조분해할당??
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  })
  return arr;
}