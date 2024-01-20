import getAsciiForString from '../utilities/getAsciiForString.js';
import findMultiple from '../utilities/findMultiple.js';

let strToCompile = 'Hello world';
strToCompile = strToCompile.split('');

let strAsciiCodes = getAsciiForString(strToCompile);

let multiple;
