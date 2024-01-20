import getAsciiForString from './modules/getAsciiForString.js';

let strToCompile = 'Hello world';
strToCompile = strToCompile.split('');
let strAsciiCodes = getAsciiForString(strToCompile);
