// Find two numbers which by multiple plus third different number equals character ascii code
const findMultiple = (searchingNumber) => {
    for (let firstDigit = 11; firstDigit >= 1; firstDigit--) {
        for (let secondDigit = 12; secondDigit >= 1; secondDigit--) {
            let score = Math.abs(firstDigit * secondDigit);
            let different = Math.abs(searchingNumber - score);

            if (
                (different <= 9 &&
                    firstDigit * secondDigit < searchingNumber) ||
                firstDigit * secondDigit == searchingNumber
            ) {
                return [firstDigit, secondDigit, different];
            }
        }
    }
};

export default findMultiple;
