const isPalindrome = (word) => {
  // Base case: If the word has 0 or 1 character, it is a palindrome
  if (word.length <= 1) {
    return true;
  }

  // Recursive case: Compare the first and last characters
  if (word[0] === word[word.length - 1]) {
    // If the first and last characters match,
    // recursively check the substring without those characters
    return isPalindrome(word.substring(1, word.length - 1));
  } else {
    // If the first and last characters don't match, it's not a palindrome
    return false;
  }
}

const word = "series"
/*
  This part of the code uses the replace method of the String object to
  perform a substitution. It searches for characters that do not match
  the pattern defined within the regular expression /[^a-zA-Z0-9]/g and
  replaces them with an empty string.
  
  The regular expression /[^a-zA-Z0-9]/g represents a pattern that
  matches any character that is not an uppercase letter (A-Z),
  lowercase letter (a-z), or digit (0-9). The ^ inside the square
  brackets is a negation operator, meaning it matches any character not
  specified within the brackets.
*/
const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

if (isPalindrome(cleanedWord)) {
  console.log(`"${word}" is a palindrome.`);
} else {
  console.log(`"${word}" is not a palindrome.`);
}
