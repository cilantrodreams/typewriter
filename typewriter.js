const sentence = 'hello there from lighthouse labs';
// loop through sentence and print each character one at a time
// first char has no delay
// every iteration add 50ms
let timeout = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeout);
  timeout += 50;
}

// print newline using final delay value
setTimeout(() => {
  console.log();
}, timeout);