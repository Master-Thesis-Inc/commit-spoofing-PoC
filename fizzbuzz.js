const fizzBuzz = (max) => {
  for (i = 0; i <= max; i++) {
    let toPrint = "";

    if (i % 2 == 0) {
      toPrint += "Fizz";
    }

    if (i % 5 == 0) {
      toPrint += "Buzz";
    }
    console.log(toPrint || i);
  }
};

fizzBuzz(50);
