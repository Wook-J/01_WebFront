function solution(my_string, index_list) {
  let str = index_list.reduce((acc, cur) => {
    acc += my_string[cur];
    return acc;
  }, '');
  return str;
}

// 다른사람 풀이
function solution(my_string, index_list) {
  return index_list.map(i => my_string[i]).join('')
}