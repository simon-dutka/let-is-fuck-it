import getAsciiForString from '../utilities/getAsciiForString.js';
import findMultiple from '../utilities/findMultiple.js';

let strToCompile = 'Hello world';
strToCompile = strToCompile.split('');

let strAsciiCodes = getAsciiForString(strToCompile);

let allMultiples = [];

for (let i = 0; i < strAsciiCodes.length; i++) {
    let multiple = findMultiple(strAsciiCodes[i]);
    let character = {
        firstDigit: multiple[0],
        secondDigit: multiple[1],
        different: multiple[2],
    };

    allMultiples.push(character);
}
