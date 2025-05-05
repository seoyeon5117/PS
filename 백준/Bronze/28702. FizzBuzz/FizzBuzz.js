const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (line.length === 3) {
    rl.close();
  }
});

rl.on("close", () => {
  if (isNumeric(Number(input[0]))) {
    isFizzBuzz(Number(input[0]) + 3);
  } else if (isNumeric(Number(input[1]))) {
    isFizzBuzz(Number(input[1]) + 2);
  } else {
    isFizzBuzz(Number(input[2]) + 1);
  }

  function isNumeric(data) {
    return !isNaN(data);
  }

  function isFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
});
