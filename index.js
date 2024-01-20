import getAsciiForString from './modules/getAsciiForString.js';
import findMultiple from './modules/findMultiple.js';

let strToCompile = 'Hello world';
strToCompile = strToCompile.split('');

let strAsciiCodes = getAsciiForString(strToCompile);

let multiple;

