function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

// arr1.concat(arr2) : arr1 배열에 arr2인자를 계속 넘겨받아 배열 합치기

// 다른사람 풀이
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}

// num_list.splice(0,n) 한것을 spread연산자 한 후 num_list의 뒷부분에 push

// 다른사람 풀이 2
function solution(num_list, n) {
  const num_list2 = num_list.splice(n);
  return [...num_list2, ...num_list];
}

// num_list2에 n번인덱스부터 마지막 인덱스의 요소를 splice 한 것을 대입
// 각각 Spread 연산자 이용하여 1개씩 나열한 후 배열화