function solution(a, b) {
  let temp1 = Number("" + a + b);
  let temp2 = 2 * a * b;
  return temp1 >= temp2 ? temp1 : temp2;
}


function solution(a, b) {
  return Math.max(Number(`${a}${b}`), a * b * 2)
}