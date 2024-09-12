function solution(arr, k) {
  return arr.reduce((acc, cur) => {
    if (k % 2 == 1) acc.push(cur * k);
    else acc.push(cur + k);
    return acc;
  }, []);
}

// 다른사람 풀이(익명함수)
const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)

// function 형태로 변형
function solution(arr, k) {
  return arr.map( element => k%2==1 ? element*k : element+k);
}