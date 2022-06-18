function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  I am  making an isPalindrome function that is going to return either true or false. If the input string is the same forwards and backwards, The return ought to be true. By doing this it means that if the input string is the same after  reversing it, It should return true. Lets look at this example, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", the  solution in this case should return true for these cases. "hi" in reverse is "ih",  the solution should return false for this case.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
