function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(20, 5));
