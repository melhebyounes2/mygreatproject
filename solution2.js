function palindrome(str) {
    var len = str.length;
    var middle = Math.ceil(len / 2)
    var palindrom = '';

    if (len % 2 !== 0) {
        palindrom = str[middle];
        // console.log(palindrom);
    }

    for (var i = middle + 1; i < len; i++) {
        if (str[i] == str[len - i + 1]) {
            palindrom = str[i] + palindrom + str[i]
        } else {
            break;
        }

    }
    console.log(palindrom)
}

palindrome('i am red racecar driver')