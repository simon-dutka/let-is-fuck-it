let output = '';

const getBrainFuck = (multiples) => {
    for (let i = 0; i < multiples.length; i++) {
        const symbols = ['>', '<', '+', '-', '[', ']', '.'];

        let loopValue = '',
            incrementValue = '',
            startPointer = '',
            differentValue = '';

        let numberOfCharacter = i + 1;

        startPointer += symbols[1].repeat(i);

        loopValue += symbols[2].repeat(multiples[i].firstDigit);

        incrementValue +=
            '[' +
            symbols[0].repeat(numberOfCharacter) +
            symbols[2].repeat(multiples[i].secondDigit) +
            symbols[1].repeat(numberOfCharacter) +
            '-]';

        if (multiples[i].different !== 0) {
            differentValue +=
                symbols[0].repeat(numberOfCharacter) +
                symbols[2].repeat(multiples[i].different);
        }

        output +=
            startPointer +
            loopValue +
            incrementValue +
            differentValue +
            symbols[6];
    }

    return output;
};

export default getBrainFuck;
