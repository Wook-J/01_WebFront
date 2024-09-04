function solution(n) {
  let result = [];
  let temp = n;

  while (temp !== 1) {
    result.push(temp);
    if (temp % 2 === 0) temp = temp / 2;
    else temp = 3 * temp + 1;
  }

  result.push(1);
  return result;
}