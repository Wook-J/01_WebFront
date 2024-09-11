function solution(binomial) {
  let arr = binomial.split(' ');

  switch (arr[1]) {
    case '+': return Number(arr[0]) + Number(arr[2]); break;
    case '-': return Number(arr[0]) - Number(arr[2]); break;
    case '*': return Number(arr[0]) * Number(arr[2]); break;
  }
}