function longestPalindrome(str) {

    var longest = '';

    for (let i = 1; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (str[i - j] == str[i + j] && typeof str[i - j] != 'undefined') {
                var palindrom = str.slice(i - j + 1, i + j)

                if (palindrom.length > longest.length) {
                    longest = palindrom;
                }
            }

            if (typeof str[i - j] == 'undefined' || typeof str[i - j] == 'undefined') {
                break
            }
        }
    }
    console.log(palindrom)
}

longestPalindrome('i am red racecar driver');