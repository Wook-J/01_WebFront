function solution(n) {
  let result = [];
  let temp = n;

  while (temp !== 1) {
    result.push(temp);
    if (temp % 2 == 0) temp /= 2;
    else temp = 3 * temp + 1;

    if (temp == 1) {
      result.push(temp);
      break;
    }
  }

  return result;
}

// 다른 사람 풀이
function solution(n) {
  const res = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    res.push(n);
  }
  return res;
}