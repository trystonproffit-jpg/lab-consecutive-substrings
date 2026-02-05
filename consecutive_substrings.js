function consecutiveSubstrings(string) {
  // Create a variable that stores an array where all substrings will be stored
  const result = [];
  // Create the exterior loop
  for (let i = 0; i < string.length; i++) {
    //substrings start here
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  // return the substring array
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Test for Repeat characters");
  console.log("Expecting: ['t', 'tt', 'ttt', 't', 'tt', 't']");
  console.log("=>", consecutiveSubstrings('ttt'));

  console.log("");

  console.log("Test for numbers");
  console.log("Expecting: ['1', '12', '123', '2', '23', '3']");
  console.log("=>", consecutiveSubstrings('123'));

  console.log("");

  console.log("Test for special characters");
  console.log("Expecting: ['!', '!@', '!@#', '@', '@#', '#']");
  console.log("=>", consecutiveSubstrings('!@#'));

  console.log("");

  console.log("Test for mixed case");
  console.log("Expecting: ['A', 'Ab', 'AbC', 'b', 'bC', 'C']");
  console.log("=>", consecutiveSubstrings('AbC'));

  console.log("");

  console.log("Test for numbers and letters");
  console.log("Expecting: ['a1c', 'a1', 'a1c', '1', '1c', 'c']");
  console.log("=>", consecutiveSubstrings('a1c'));

  console.log("");

  console.log("Test for empty string");
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

  //Given Tests
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;