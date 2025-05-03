const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const L = Number(input[0]);
  const strings = input[1];
  let result = 0;
  let r = 1;

  for (let i = 0; i < L; i++) {
    let num = stringToNumber(strings[i]);
    result = result + num * r;
    r *= 31;
  }
  result %= 1234567891;

  console.log(result);

  function stringToNumber(string) {
    return string.charCodeAt(0) - 96; // 'a' -> 1
  }
});
