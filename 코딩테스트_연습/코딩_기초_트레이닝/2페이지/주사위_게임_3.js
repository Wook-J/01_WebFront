function solution(a, b, c, d) {
  const diceSet = new Set([a, b, c, d]);

  if (diceSet.size == 1) return 1111 * a;
  else if (diceSet.size == 2) {
    if (a == b && a == c) return (10 * a + d) * (10 * a + d);
    else if (a == b && a == d) return (10 * a + c) * (10 * a + c);
    else if (a == c && a == d) return (10 * a + b) * (10 * a + b);
    else if (b == c && b == d) return (10 * b + a) * (10 * b + a);
    else if (a == b) return (a + c) * Math.abs(a - c);
    else if (a == c) return (a + b) * Math.abs(a - b);
    else if (a == d) return (a + b) * Math.abs(a - b);
    return 1;
  }
  else if (diceSet.size == 3) {
    if (a == b) return c * d;
    else if (a == c) return b * d;
    else if (a == d) return b * c;
    else if (b == c) return a * d;
    else if (b == d) return a * c;
    else if (c == d) return a * b;
  }
  else return Math.min(a, b, c, d);
}