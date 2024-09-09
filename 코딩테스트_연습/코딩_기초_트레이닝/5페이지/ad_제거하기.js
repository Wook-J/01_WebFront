function solution(strArr) {
  return strArr.reduce((acc, cur) => {
    if (cur.indexOf("ad") == -1) acc.push(cur);
    return acc;
  }, []);
}

// 다른사람 풀이(filter)
function solution(strArr) {
  return strArr.filter(element => element.indexOf("ad") == -1);
}