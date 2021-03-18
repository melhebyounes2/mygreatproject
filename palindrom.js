// function palindrome(str) {
//     var len = str.length;
//     var middle = Math.ceil(len / 2)
//     var palindrom = '';

//     if (len % 2 !== 0) {
//         palindrom = str[middle];
//         // console.log(palindrom);
//     }

//     for (var i = middle + 1; i < len; i++) {
//         if (str[i] == str[len - i + 1]) {
//             palindrom = str[i] + palindrom + str[i]
//         } else {
//             break;
//         }

//     }
//     // console.log(palindrom)
// }

// palindrome('i am red racecar driver')

// // write a function that finds the largest palindrome in a string

// // All characters can be valid for the palindrome, including whitespace,

// //     In the string 'i am red race car driver' - the largest palindrome would be 'd rececar d'


// function palindrome(str) {
//     var len = str.length;
//     var second = len - (len - 1)
//     var palindrom = '';

//     for (let i = second; i < len; i++) {
//         if (str[i + 1] == str[i - 1]) {
//             palindrom = str[i + 1] + str[i] + str[i + 1]
//         } else {
//             break;
//         }
//     }
// }

// palindrome('radar');

// function longestPalindrome(string) {
//     var longest = '';

//     for (var i = 0; i < string.length; i++) {

//         var currentLetter = string[i];

//         var firstOccurance;
//         for (var j = i + 1; j < string.length; j++) {
//             if (currentLetter === string[j]) {

//                 firstOccurance = j;

//                 var subString = string.slice(i, firstOccurance + 1);

//                 if (subString.length > longest.length && subString === subString.split('').reverse().join('')) {
//                     longest = subString;
//                     console.log(longest)
//                 }
//             }
//         }
//     }
// };

// longestPalindrome("i am red racecar driver")


// const s = 'i am red racecar driver'
// var p = [];
// var check = 0;
// var long
// var palindrom = '';
// for (let i = 1; i < s.length; i++) {
//     for (let j = 1; j < s.length; j++) {
//         if (s[i - j] == s[i + j] && typeof s[i - j] != 'undefined') {
//             check = 1;
//             palindrom = s.slice(i - j + 1, i + j)
//         } else {
//             if (check === 1) {
//                 p.push(s.slice(i - j + 1, i + j))
//             }
//             check = 0;

//         }
//         if (typeof s[i - j] == 'undefined' || typeof s[i - j] == 'undefined') {
//             break
//         }
//     }
// }
// console.log(p)


// palindrom('i am red racecar driver');

// function findLongestPalindrome(str) {

//     let palindrome = '';
//     let count = 0;
//     let countMax = 0;
//     let pos // position de la lettre au milieu de palindrome
//     let pair // si le palindrome à un nombre de lettres pair "i am red racecar driver"
//     console.log(str.length)
//     for (var i = 0; i < 3; i++) {
//         count = 0

//         for (var j = 2; j >= 1; j--) {
//             // position lettre actuelle increment si deux lettres identiques trouvées
//             let currentLetter = (3 - 1) - (3 - 1) + 0 + 1
//             console.log(currentLetter);

//             // Si lettres identiques counteur++
//             if (str[currentLetter] == str[j]) {
//                 count++
//             }
//             else {
//                 count = 0
//             }

//             // Si position lettre actuelle supérieur on stop pour éviter de reprendre des lettres déjà utilisées

//             if (currentLetter >= j) {

//                 if (count > countMax) {
//                     pos = j
//                     countMax = count
//                     pair = currentLetter != j
//                 }
//                 count = 0

//                 break
//             }

//         }
//     }

//     // Construit le palindrome grâce au comptMax et à la pos
//     for (var k = 1; k < countMax; k++) {
//         if (pair) {
//             palindrome += str[pos - countMax + k + 1]
//         }
//         else {
//             palindrome += str[pos - countMax + k]
//         }
//     };
//     let ifPair = !pair ? str[pos] : ''
//     palindrome = palindrome + ifPair + reverseString(palindrome)
//     console.log(palindrome)
// }

// // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
// }

// findLongestPalindrome('ada')


// var longestPalindrome = function (s) {
//     let currentLongest = [0, 1];

//     for (let i = 1; i < s.length; i++) {
//         const odd = expandAroundCenter(s, i - 1, i + 1); // treating the given letter as a center and checking its surrounding letters 
//         const even = expandAroundCenter(s, i - 1, i); // checking if the  center is between the given letter and the previous letter
//         const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; // choosing the longest palindrome between odd and even
//         currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest // comparing the longest to the current longest palindrome and updating current longest accordingly
//     }
//     console.log(s.slice(currentLongest[0], currentLongest[1]))
//     return s.slice(currentLongest[0], currentLongest[1]);
// };

// function expandAroundCenter(s, leftIdx, rightIdx) {
//     while (leftIdx >= 0 && rightIdx < s.length) {
//         if (s[leftIdx] !== s[rightIdx]) break;
//         leftIdx--;
//         rightIdx++;
//     }
//     return [leftIdx + 1, rightIdx]
// }

// longestPalindrome('d racecar ds');