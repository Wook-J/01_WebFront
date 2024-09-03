function solution(num_list) {
  let result = num_list.reduce((acc, cur) => {
    acc[0] *= cur;
    acc[1] += cur;
    return acc;
  }, [1, 0]);
  return (result[0] < result[1] * result[1] ? 1 : 0);
}

// 단일 reduce
function solution(num_list) {
  let mul = num_list.reduce((acc, cur) =>  acc * cur, 1);
  let sum = num_list.reduce((acc, cur) =>  acc + cur, 0);
  return (mul < sum * sum) ? 1 : 0;
}

// for of arry 이용
function solution(num_list) {
  let accMul = 1;
  let accSum = 0;
  for (const num of num_list) {
    accMul *= num;
    accSum += num;
  }
  return accMul < accSum ** 2 ? 1 : 0;
}