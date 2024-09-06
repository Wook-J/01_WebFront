function solution(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length == 0) stk.push(arr[i]);
    else if (stk[stk.length - 1] < arr[i]) stk.push(arr[i]);
    else {
      stk.splice(stk.length - 1);
      i--;
    }
  }

  return stk;
}
/* arr[1, 4, 2, 5, 3]
  stk = [];

  1번째 턴 (element: 1, arr[0]) stk.length == 0 (T) -> stk : [1]

  2번째 턴 (element: 4, arr[1]) stk.length == 0 (F) -> stk.length == 1
    -> stk[0] (== 1) < element (== 4) (T) -> stk : [1, 4]  
  
  3번째 턴 (element: 2, arr[2]) stk.length == 0 (F) -> stk.length == 2
    -> stk[1] (== 4) < element (== 2) (F) -> stk : [1]

  4번째 턴 (element: 5, arr[3]) stk.length == 0 (F) -> stk.length == 1
    -> stk[0] (== 1) < element (== 5) (T) -> stk : []

*/