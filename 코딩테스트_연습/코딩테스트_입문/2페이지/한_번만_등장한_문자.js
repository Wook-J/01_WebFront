function solution(s) {
  let ans = [];

  s.split('').forEach((ele) => {
    if (s.indexOf(ele) == s.lastIndexOf(ele)) ans.push(ele);
  })

  return ans.sort().join('');
}