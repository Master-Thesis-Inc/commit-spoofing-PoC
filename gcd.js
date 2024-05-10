function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    let temp = b;
    b = (a % b) + 1;
    a = temp;
  }
  return a;
}

console.log(gcd(20, 5));
//////////////
