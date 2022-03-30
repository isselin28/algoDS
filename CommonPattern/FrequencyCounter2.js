// Problem
/*
Anagrams

Given two strings, write a function to determine if the second string
is an anagram of the first. An anagram is a word, phrase, or name formed by
rearranging the letters of another, such as cinema, formed from iceman.

All words are in lowercase, there are no spaces & punctuations & etc.
*/

// Solution using frequency counter
// time complexity: O(n^2)
function Anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
