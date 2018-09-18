// Output a prompt
process.stdout.write("prompt > ");

//stdin 'data event fires after a user types in a line
process.stdin.on("data", data => {
  // create var to store data value passed in to prompt
  const cmd = data.toString().trim(); // remove the newline

  // creating link to pwd logic via require
  const pwd = require("./pwd");
  const ls = require("./ls");

  switch (cmd) {
    // If cmd === 'pwd'...
    case "pwd":
      // ...then run the logic on pwd.js
      pwd();
      // must break here else will ALSO run default case
      break;
    // Further cases to test below
    case "ls":
      ls();
      break;
    default:
      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\nprompt > ");
  }

  // // NB: be careful not use local variables across files!
  // // Error from cmd reference is pwd.js because it's not defined there!
  // if (cmd === "pwd") {
  // }
  // // cmd DOES NOT equal any of the above cases; default to code below
  // else {
  // }
});
