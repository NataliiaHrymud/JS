'use strict';

function findLongestWord(string) {
    const words = string.split(" ");
    let longestword = words[0];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestword.length) {
        longestword = words[i];
      }
    }
    return longestword;
  }

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped

  console.log(findLongestWord("Google do a roll")); // 'Google'

  console.log(findLongestWord("May the force be with you")); // 'force'