const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 2;
const long_consec = (strarr, k) => {
  const arr = [];
  const len = strarr.length;
  if (k <= 0 || k > len || len === 0) {
    return "Nothing in Elm,nothing in Erlang";
  }
  for (var i = 0, j = len - 1; i <= len / 2 - 1; i++, j--) {
    arr.push(strarr[i] + strarr[i + 1]);
    if (i < j - 1) {
      arr.push(strarr[j - 1] + strarr[j]);
    }
  }

  return arr.sort((a, b) => {
    return b.length - a.length;
  })[0];
};

console.log(long_consec(strarr, k));
