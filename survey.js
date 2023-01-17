const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please state your preferred name! ', (answer1) => {
  rl.question("Whats your favourite thing to do in your spare time? ", (answer2) => {
    rl.question('What is your go to pump-up music? ', (answer3) => {
      rl.question('Tell us your favourite meal! (eg: breaky, brunch, etc.) ', (answer4) => {
        rl.question('What is your go-to dish? ', (answer5) => {
          rl.question('What sport would you say is the best? ', (answer6) => {
            rl.question('Tell us you deepest fear... ', (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, housing ${answer5} for ${answer4}, loves watching a good ${answer6} game, and is deeply terrified of ${answer7}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

