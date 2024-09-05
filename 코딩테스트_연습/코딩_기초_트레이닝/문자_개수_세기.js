function solution(my_string) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  return alphabet.reduce((acc, cur) => {
    let num = 0;
    for (let i = 0; i < my_string.length; i++) {
      if (my_string[i] == cur) num++;
    }
    acc.push(num);
    return acc;
  }, []);
}