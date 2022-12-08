//An 'alarm clock/timer' that beeps after a specified amount of time has passed.
//User specifies an unlimited number of alarm times using the command line

const timer = function (times) {
for (const item of times) {
  if (times.length === 0) return 0; //does nothing if no arguments/numbers are provided
  if (typeof(Number(item)) === 'number' && item >= 0) { //skips any negative numbers or arguments that are not numbers
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }
}
};

const seconds = process.argv.slice(2).sort((a, b) => a - b);

timer(seconds);
