function solution(num_list) {
  let result = num_list.reduce((acc, cur) => {
    if (cur % 2 == 0) acc[0] += cur;
    else acc[1] += cur;
    return acc;
  }, ["", ""]);

  return Number(result[0]) + Number(result[1]);
}