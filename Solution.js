
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {

    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }

    let remainder = 1;
    let numberOfDigits = 1;

    while (remainder % k !== 0) {
        remainder = (remainder * 10 + 1) % k;
        if (numberOfDigits++ > k) {
            return -1;
        }
    }
    return numberOfDigits;
};
