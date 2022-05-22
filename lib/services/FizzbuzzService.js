class FizzbuzzService {

    static applyValidationInExplorer(explorer) {

        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;

        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;

        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;

        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number) {
        if (number.score % 5 === 0 && number.score % 3 === 0) {
            number.trick = "Fizzbuzz";
            return explorer;

        } else if (number.score % 3 === 0) {
            number.trick = "Fizz"
            return explorer;

        } else if (number.score % 5 === 0) {
            number.trick = "Buzz"
            return explorer;

        } else {
            number.trick = explorer.score;
            return explorer;
        }
    }
}

module.exports = FizzbuzzService;