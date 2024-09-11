function solution(arr, flag) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < 2 * arr[i]; j++) answer.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i]; j++) answer.splice(-1, arr[i]);
    }
  }

  return answer;
}

// reduce 1
function solution(arr, flag) {
  return arr.reduce((acc, cur, idx) => {
    if (flag[idx]) for (let i = 0; i < 2 * cur; i++) acc.push(cur);
    else for (let i = 0; i < cur; i++) acc.splice(-1, cur);
    return acc;
  }, []);
}

// reduce 2
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    [],
  );
}