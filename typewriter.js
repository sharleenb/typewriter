const sentence = 'hello there from lighthouse labs';

let extraDelay = 0;
let letterCount = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
    letterCount += 1
    if(letterCount === sentence.length) {
      console.log('\n');
    }
  }, extraDelay)
  extraDelay += 50;
}

