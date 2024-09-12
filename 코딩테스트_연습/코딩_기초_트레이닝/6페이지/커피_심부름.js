function solution(order) {
  let coffeeNum = order.reduce((acc, cur) => {
    if (cur.includes('americano') || cur.includes('anything')) acc[0]++;
    else if (cur.includes('cafelatte')) acc[1]++;

    return acc;
  }, [0, 0])

  return coffeeNum[0] * 4500 + coffeeNum[1] * 5000;
}