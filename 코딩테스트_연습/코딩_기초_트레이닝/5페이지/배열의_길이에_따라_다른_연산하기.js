function solution(arr, n) {
  if (arr.length % 2 == 1) {
    return arr.reduce((acc, cur, idx) => {
      if (idx % 2 == 0) acc.push(cur + n);
      else acc.push(cur);
      return acc;
    }, [])
  } else {
    return arr.reduce((acc, cur, idx) => {
      if (idx % 2 == 1) acc.push(cur + n);
      else acc.push(cur);
      return acc;
    }, [])
  }
}

// 다른 사람 풀이
function solution(arr, n) {
  return arr.map((num, idx)=> ((arr.length%2 !== idx%2) ? num+n: num))
}