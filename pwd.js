// because this is a js file that is being required and returning a value, we assign module.exports to an anonymous function that has the origin pwd logic

module.exports = function() {
  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt > ");
};
