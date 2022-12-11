const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("Enter 'b' for timer to beep right away, otherwise enter a number between 1 and 9 to set the timer for that many seconds");
console.log("Press ctrl + c to exit");

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (key.toString() === 'b') {
    process.stdout.write('\x07');
  } else {
    console.log(`Setting timer for ${key} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  });
