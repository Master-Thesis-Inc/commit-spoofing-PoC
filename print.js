const printPrimeNumbers = (max) => {
  const primes = [];
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 0; j < primes.length; j++) {
      const num = primes[j];
      if (i % num === 0) {
        isPrime = false;
        break;
      }
      if (num > Math.sqrt(i)) {
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
      console.log(i);
    }
  }
};

printPrimeNumbers(1000);
