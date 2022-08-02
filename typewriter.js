const sentence = "hello there from lighthouse labs\n";

let time = 0;
for (let letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, time);
  time = time + 80;
}
