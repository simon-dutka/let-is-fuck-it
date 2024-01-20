const getAsciiForString = (str) => {
    // Store all ascii codes
    let asciiCodes = {};

    for (let i = 32; i <= 127; i++) {
        asciiCodes[String.fromCharCode(i)] = i;
    }

    // Store string as ascii code
    let strAsciiCodes = [];

    for (let i = 0; i < str.length; i++) {
        strAsciiCodes.push(asciiCodes[str[i]]);
    }

    return strAsciiCodes;
};

export default getAsciiForString;
