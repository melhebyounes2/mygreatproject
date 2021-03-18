function longestPalindrome(string) {
    var longest = '';

    for (var i = 0; i < string.length; i++) {

        var currentLetter = string[i];

        var firstOccurance;
        for (var j = i + 1; j < string.length; j++) {
            if (currentLetter === string[j]) {

                firstOccurance = j;

                var subString = string.slice(i, firstOccurance + 1);

                if (subString.length > longest.length && subString === subString.split('').reverse().join('')) {
                    longest = subString;
                    console.log(longest)
                }
            }
        }
    }
};

longestPalindrome("i am red racecar driver")